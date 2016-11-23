var session = require('./../controllers/session.js');

module.exports = function(app){
	app.post('/user/login', function(req, res){
		session.logReg(req, res)
	})
	app.get('/logout', function(req, res){
		session.logout(req, res)
	})
	app.get('/user/checksess', function(req, res){
		session.checkSess(req, res)
	})
}
