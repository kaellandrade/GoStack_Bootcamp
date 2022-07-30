import {useEffect, useState} from "react";
import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {Container, Badge, NumberNotification, Scroll, Notification, NotificationsList, AnimationBell} from './styles';
import api from "../../services/api";

const countUnread = notifications => notifications.reduce((acc, {read}) => !read ? acc + 1 : acc, 0);


const Index = () => {
	const [visible, setVisable] = useState(false);
	const [notifications, setNotification] = useState([]);
	const [totalNotificationUnread, setTotal] = useState(0);

	const loadNotifications = async _ => {
		const response = await api.get('notifications');

		const data = response.data.map(notification => ({
			...notification,
			timeDistance: formatDistance(
				parseISO(notification.createdAt),
				new Date(),
				{addSuffix: true, locale: pt}
			)
		}))
		setNotification(data);
		setTotal(countUnread(data));

	}

	const handleMarkAsRead = async (idNotification) => {
		await api.put(`notifications/${idNotification}`);
		const newNotifications = notifications.map((notification) => {
			// eslint-disable-next-line no-underscore-dangle
			if (notification._id === idNotification) {
				return {...notification, read: true}
			}
			return notification
		})
		setNotification(newNotifications);
		setTotal(countUnread(newNotifications));
	}

	useEffect(() => {
		loadNotifications();
	}, []);


	const toggleVisable = _ => {
		setVisable(!visible);
	}

	return (
		<Container>
			<Badge onClick={toggleVisable}>
				{totalNotificationUnread ?
					<NumberNotification>
						{totalNotificationUnread}
					</NumberNotification>
					: null
				}
				<AnimationBell sing={totalNotificationUnread} color="#7159c1" size={25}/>
			</Badge>
			<NotificationsList visible={visible}>
				<Scroll>
					{notifications.map(({content, read, timeDistance, _id}) => (
							<Notification key={_id} unread={!read}>
								<p>{content}</p>
								<time>{timeDistance}</time>
								{!read &&
									<button onClick={_ => handleMarkAsRead(_id)}
											type="button">Marcar como lida
									</button>
								}
							</Notification>
						)
					)}
				</Scroll>
			</NotificationsList>
		</Container>
	);
}

export default Index;
