var mongoose = require('mongoose');
var UserSchema =  new mongoose.Schema({
	name: {type:String, required:[true,'Name is required'], minlength: [3, 'Should be longer than 3 characters'], unique:true },
	role: {type: String, required: [true, 'role is required']}
}, {timestamps:true})

mongoose.model('User', UserSchema);
