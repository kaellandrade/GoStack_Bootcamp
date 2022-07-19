import {MdNotifications} from 'react-icons/md'
import {useEffect, useState} from "react";
import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {Container, Badge, Scroll, Notification, NotificationsList} from './styles';
import api from "../../services/api";

const loadNotifications = async setNotification => {
	const response = await api.get('notifications');

	const data = response.data.map(notification => ({
		...notification,
		timeDistance: formatDistance(
			parseISO(notification.createdAt),
			new Date(),
			{addSuffix:true, locale:pt}
		)
	}))
	setNotification(data);
}
const Index = () => {
	const [visible, setVisable] = useState(true);
	const [notifications, setNotification] = useState(true);

	useEffect(()=>{
		loadNotifications(setNotification);
	},[]);


	const toggleVisable = _ => {
		setVisable(!visible);
	}

	return (
		<Container>
			<Badge onClick={toggleVisable} hasUnRead={true}>
				<MdNotifications color="#7159c1" size={20}/>
			</Badge>
			<NotificationsList visible ={visible}>
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
}

export default Index;
