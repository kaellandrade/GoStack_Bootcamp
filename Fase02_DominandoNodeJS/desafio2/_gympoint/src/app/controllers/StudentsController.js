import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    try {
      const studentsExist = await Students.findOne({
        where: { email: req.body.email },
      });
      if (!studentsExist) {
        const { name, email } = await Students.create(req.body);
        return res.json({ name, email });
      }
      return res.json({ error: 'Aluno já está cadastrado com esse email!' });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
        obs: 'name, email, data_nascimento, peso e altura são obrigatórios para cadastrar um novo aluno',
      });
    }
  }

  async update(req, res) {
    const { email, new_email } = req.body;
    try {
      const students = await Students.findOne({
        where: { email },
      });
      if (!students) {
        // Verificando se usuário existe
        return res
          .status(401)
          .send({ error: 'Impossível atulizar, pois estudante não existe!' });
      }
      if (new_email && email !== new_email) {
        // Deseja alterar o email
        const exist_email = await Students.findOne({
          where: { email: new_email },
        });
        if (!exist_email) {
          // Novo email não  existe no banco. OK
          const { name, data_nascimento, peso, altura } = await students.update(
            {
              ...req.body,
              email: new_email,
            },
          );
          return res.json({ name, new_email, data_nascimento, peso, altura });
        }
        return res
          .status(400)
          .send({ error: `Já existe usuário com o email ${new_email}` });
      }
      // Não deseja alterar o email
      const { name, data_nascimento, peso, altura } = await students.update(
        req.body,
      );
      return res.json({ name, email, data_nascimento, peso, altura });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  /**
   * Removendo um novo usuário
   */
  async delete(req, res) {
    const { email } = req.body;
    try {
      const student = await Students.findOne({ where: { email } });
      if (student) {
        await student.destroy();
        return res.json({
          messagem: `Usuário ${student.name} removido com sucesso!`,
        });
      }
      return res.status(400).send({ messagem: `${email} não existe! ` });
    } catch (error) {
      return res.json(error);
    }
  }
}
export default new StudentsController();
