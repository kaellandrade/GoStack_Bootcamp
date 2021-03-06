import Student from '../models/Students';
import Help from '../models/Help';

class HelpControllerStudent {
  async store(req, res) {
    const { idStudent } = req.params;
    const { question } = req.body;
    const studentExist = await Student.findByPk(idStudent);
    /**
     * Verifica se existe estudante com id informado.
     */
    if (!studentExist) {
      return res
        .status(400)
        .json({ error: `Não existe estudante com id ${idStudent}` });
    }

    /**
     * Existe, então vamos cadastrar sua dúvida.
     */
    const quest = await Help.create({
      student_id: idStudent,
      question,
    });

    return res.status(200).json(quest);
  }

  /**
   * Todos os pedidos de auxílios sem respostas.
   */
  async index(req, res) {
    const allQuestions = await Help.findAll({
      where: { answer: null },
    });
    return res.status(200).json(allQuestions);
  }

  async show(req, res) {
    /**
     * Listar todos pedidos de auxílio de um usuário com base em seu ID de cadastro
     */
    const { idStudent } = req.params;
    const studentExist = await Student.findByPk(idStudent);
    /**
     * Se o estudante não existir.
     */
    if (!studentExist) {
      return res
        .status(400)
        .json({ error: `Não existe estudante com id ${idStudent}` });
    }
    const allQuestions = await Help.findAll({
      where: { student_id: idStudent },
    });

    return res.status(200).send(allQuestions);
  }
}
export default new HelpControllerStudent();
