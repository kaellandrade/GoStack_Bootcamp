import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  /**
   * Tarefa que será executada
   */
  async handle({data}) {
    const {appointment} = data;
    const linkAvatar = `http://localhost:3333/files/${appointment.user.avatar.path}`;
    console.log(appointment);
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento Cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        avatar: linkAvatar,
        date: format(
          parseISO(appointment.date),
          "dd 'de' MMMM', às' H:mm'h' ",
          {
            locale: pt,
          },
        ),
      },
    });
  }
}

export default new CancellationMail();
