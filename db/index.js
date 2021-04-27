const mongoose = require("mongoose");

function connect() {
	mongoose.connect(
		"mongodb+srv://dhaouiaziz13:Dhaoui2708@cluster0.cxxvc.mongodb.net/DMK?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err) => {
			if (!err) {
				console.log("db connected");
			} else {
				console.log("db connection error");
			}
		}
	);
}

module.exports = connect;
