const Account = require('../../models/account/Account');

module.exports = async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	//1.2
	try{
		const searchRes = await Account.findOne({email: req.body.email});
		if(searchRes != null){
			return res.send({error: 'email already exists'});
		} else {
			await account.save();
			return res.send({message: 'success'});
		}
	} catch(e) {
		console.log(e);
	}
};