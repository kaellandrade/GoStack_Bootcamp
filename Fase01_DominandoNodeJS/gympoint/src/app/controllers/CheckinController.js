import { addDays, isBefore } from 'date-fns';
import CheckIns from '../models/Checkins';
import Students from '../models/Students';

class CheckinController {
  // TODO: Só pode fazer checkin se a matrícula estiver ATIVA.
  async store(req, res) {
    const { idStudent } = req.params;
    const student = await Students.findByPk(idStudent);
    /**
     * Caso não exista estudante com esse ID
     */
    if (!student) {
      return res
        .status(400)
        .json({ error: `Não existe estudante com id ${idStudent}` });
    }
    /**
     * Verificando a quantidade de checkins em 7 dias corridos.
     */
    const date = addDays(new Date(), -7);

    const allCheckins = await CheckIns.findAll({
      where: { student_id: idStudent },
      attributes: ['created_at', 'id'],
      order: [['created_at', 'DESC']],
    });

    // Capturando até os último 5 checkins caso exista.
    const lastFiveCheckins = allCheckins.slice(0, 5);

    // Verificando os checkins que estão dentro dos 7 dias corridos.
    const beforeSevendays = lastFiveCheckins.filter((d) =>
      isBefore(date, d.dataValues.created_at),
    );
    /**
     * Caso haja 5 checkins dentro do período de 7 dias corridos.
     */
    if (beforeSevendays.length === 5) {
      return res.status(401).json({
        error:
          'Só pode ser feito 5 checinks dentro de um período de 7 dias corridos.',
      });
    }
    // realiza o checkin
    await CheckIns.create({ student_id: Number(idStudent) });
    return res.status(200).send();
  }

  async index(req, res) {
    const { idStudent } = req.params;
    const allCheckins = await CheckIns.findAll({
      where: { student_id: idStudent },
      attributes: ['created_at', 'id'],
      order: [['created_at', 'DESC']],
    });
    return res.status(200).json(allCheckins);
  }
}
export default new CheckinController();
