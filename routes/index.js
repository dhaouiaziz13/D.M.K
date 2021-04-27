const router = require("express").Router();
const Team = require("../models/model");
router.post("/newuser", async (req, res) => {
	const post = new Team({
		TeamName: req.body.teamname,
		ToplanerName: req.body.toplanername,
		JunglerName: req.body.junglername,
		MidlanerName: req.body.midlanername,
		AdcarryName: req.body.adcarryname,
		SupportName: req.body.supportname,
	});
	try {
		post.save();
		return res.status(200).send("done");
	} catch (error) {
		console.log("saving error");
	}

	// console.log(req.body);
});

////////////////////////////////////////////////////////

router.get("/getdata", async (req, res) => {
    // console.log('incoming req')
	await Team.find({}, (err, doc) => {
		if (!err && doc) {
			return res.json(doc);
		}
	});
});

module.exports = router;
