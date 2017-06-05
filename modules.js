//require mongoose
var mongoose = require('mongoose');

module.exports = function () {

const waiterData = function() {
	const waiterSchema = new mongoose.Schema({
		waiter_username: {
			type: String,
			required: true
		},

		waiter_name: {
			type: String,
		},

		waiter_surname: {
			type: String,
		},

		waiter_password: {
			type: String,
			required: true
		},

		waiter_days: {
			type: String
		}
	});

	//declare the unique values
	waiterSchema.index({waiter_username: 1}, {unique: true});

	var waiters = mongoose.model('waiters', waiterSchema);
	
	return waiters;
}

const adminData = function() {
	const adminSchema = new mongoose.Schema({
		admin_username: {
			type: String,
			required: true
		},

		admin_name: {
			type: String
		},

		admin_surname: {
			type: String
		},

		admin_password: {
			type: String,
			required: true
		}

	})
	
	adminSchema.index({admin_surname: 1}, {unique: true});

	var admin = mongoose.model('admin', adminSchema);

	return admin;
}

	return {
		waiterData,
		adminData
	};
}