import {MdNotifications} from 'react-icons/md'
import {Container, Badge, Scroll, Notification, NotificationsList} from './styles';

const Index = () => (
	<Container>
		<Badge hasUnRead={true}>
			<MdNotifications color="#7159c1" size={20}/>
		</Badge>
		<NotificationsList>
			<Scroll>
				<Notification unread>
					<p>Você possui um novo agendamento para hoje.</p>
					<time>há 2 dias</time>
					<button type="button">Marcar como lida</button>
				</Notification>

				<Notification>
					<p>Você possui um novo agendamento para hoje.</p>
					<time>há 2 dias</time>
					<button type="button">Marcar como lida</button>
				</Notification>

				<Notification>
					<p>Você possui um novo agendamento para hoje.</p>
					<time>há 2 dias</time>
					<button type="button">Marcar como lida</button>
				</Notification>

				<Notification>
					<p>Você possui um novo agendamento para hoje.</p>
					<time>há 2 dias</time>
					<button type="button">Marcar como lida</button>
				</Notification>

				<Notification>
					<p>Você possui um novo agendamento para hoje.</p>
					<time>há 2 dias</time>
					<button type="button">Marcar como lida</button>
				</Notification>
			</Scroll>
		</NotificationsList>
	</Container>
);

export default Index;
