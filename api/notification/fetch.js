const Notification = require('../../models/notification/Notification');

module.exports = async function(req, res, next) {
    const accId = req.query['accountId'];
    const searchRes = await Notification.find({accountId: accId});  
	return res.send({notifications: searchRes});
};