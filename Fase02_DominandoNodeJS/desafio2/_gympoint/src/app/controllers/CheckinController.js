import CheckIns from '../models/Checkins';
import Students from '../models/Students';

class CheckinController {
  // TODO: O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.
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

    await CheckIns.create({ student_id: Number(idStudent) });

    return res.status(200).send();
  }

  async index(req, res) {
    const { idStudent } = req.params;
    const allCheckins = await CheckIns.findAll({
      where: { student_id: idStudent },
      attributes: ['created_at', 'id'],
    });
    return res.status(200).json(allCheckins);
  }
}
export default new CheckinController();
