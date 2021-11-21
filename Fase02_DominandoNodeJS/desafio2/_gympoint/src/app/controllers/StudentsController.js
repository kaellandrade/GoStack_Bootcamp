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
}
export default new StudentsController();
