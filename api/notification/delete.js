const Notification = require('../../models/notification/Notification');

module.exports = async function(req, res, next) {
    const accId = req.query['accountId'];
    const colorPar = req.query['color'];
    await Notification.deleteMany({accountId: accId, color: colorPar});                                                                   //task 4?
	return res.send({message: 'deleted succesfully'});
};