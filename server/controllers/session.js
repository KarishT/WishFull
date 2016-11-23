var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
	return{
		logReg: function(req, res){
			User.findOne({name: req.body.name}, function(err, user){
				if(!user){
					var user = new User(req.body);
					user.save(function(err,user){
						if(err){
							console.log(err);
						}
						else{
							req.session.user = user;
							req.session.save();
							if(user.role == 'donor'){
								res.json({data: req.session.user, status: true, role: 'donor'})
							}
							else {
								res.json({data: req.session.user, status: true, role: 'donee'})
							}
						}
						})
				}
				else{
					req.session.user = user;
					req.session.save()
					if(user.role == 'donor'){
						res.json({data: req.session.user, status: true, role: 'donor'})
					}
					else {
						res.json({data: req.session.user, status: true, role: 'donee'})
					}
				}
			})
		},

		logout: function(req, res){
			req.session.destroy()
			res.redirect('/')

		},
		checkSess: function(req, res){
			if(req.session.user){
				res.json(req.session.user)
			}else{
				res.send(null)
			}
		}
	}
})();
