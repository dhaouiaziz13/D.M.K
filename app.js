const express = require("express");
const app = express();
const Port = process.env.PORT || 3000;
const cors = require("cors");
const connect = require("./db/index");
app.use(cors());
app.use(express.json());
////////////////////////////////////////////
connect();
///////////////////////////////////////////
app.use("/api", require("./routes/index"));
////////////////////////////////////////////
app.get("/", (req, res) => {
	res.send("working");
});

app.listen(Port, () => {
	console.log(`app listening on port ${Port} `);
});
