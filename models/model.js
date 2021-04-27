const mongoose = require("mongoose");

module.exports = mongoose.model(
	"teams",
	new mongoose.Schema({
		TeamName: {
			type: String,
		},
		ToplanerName: {
			type: String,
		},
		JunglerName: {
			type: String,
		},
		MidlanerName: {
			type: String,
		},
		AdcarryName: {
			type: String,
		},
		SupportName: {
			type: String,
		},
	})
);
