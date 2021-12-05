import User from '../models/User';
import Notification from '../schemas/Notification';
class NotificationsController {
    async index(req, res) {
        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });
        if (!checkUserProvider) {
            return res
                .status(401)
                .json({ error: 'Only provider can load notifications' });
        }

        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ createdAt: 'desc' })
            .limit(20);

        return res.json(notifications);
    }
    async update(req, res) {
        const { id } = req.params;

        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkUserProvider) {
            return res
                .status(401)
                .json({ error: 'Only provider can load update notifications' });
        }
        /**
         * Toggle notification read
         */
        const { read } = await Notification.findById(id);
        const notification = await Notification.findByIdAndUpdate(
            id,
            {
                read: !read,
            },
            { new: true },
        );
        return res.json(notification);
    }
}
export default new NotificationsController();
