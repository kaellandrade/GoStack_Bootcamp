import * as Yup from 'yup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Student from '../models/Students';
import Help from '../models/Help';
import Mail from '../../lib/Mail';

class HelpControllerStudentAdmin {
  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().min(5),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({
        error:
          'Respota inválida! Deve ser uma string e contér no mínimo 5 letras',
      });
    }
    const { idQuestion } = req.params;
    const { answer } = req.body;
    const question = await Help.findByPk(idQuestion, {
      include: [
        {
          model: Student,
          attributes: ['email', 'name'],
          as: 'student',
        },
      ],
    });
    /**
     * Verifica se existe estudante com id informado.
     */
    if (!question) {
      return res
        .status(400)
        .json({ error: `Não existe perguntas com id ${idQuestion}` });
    }

    /**
     * Existe, então vamos cadastrar sua dúvida.
     */

    const date = new Date();
    const dateFormatedAnswer = format(
      date,
      "dd 'de' MMMM 'de' yyyy '('EEEE')'",
      {
        locale: pt,
      },
    );
    const dateFormatedQuestion = format(
      question.createdAt,
      "dd 'de' MMMM 'de' yyyy '('EEEE')'",
      {
        locale: pt,
      },
    );

    await question.update({
      answer,
      answer_at: date,
    });

    await Mail.sendMail({
      to: `${question.student.name} <${question.student.email}>`,
      subject: 'GymPoint responde!',
      template: 'answer',
      context: {
        student: question.student.name,
        question: question.question,
        answer,
        dateAnswer: dateFormatedAnswer,
        dateQuestion: dateFormatedQuestion,
      },
    });

    return res.status(200).send();
  }
}
export default new HelpControllerStudentAdmin();
