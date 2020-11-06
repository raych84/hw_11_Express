var data = require("../db/db");
var notes = require("/db/notes");
const app = require("express").Router();




// GET route

app.get("/api/notes", function (req, res) {
	return res.json(data)
})


// POST route
app.post("/api/notes", function (req, res) {
	var newNote = req.body;
	console.log(newNote);
	notes.push(newNote);
	res.json(newNote)
})



// DELETE
// app.delete("/api/notes/:id", function(req, res) {
// 	const activeNoteId = req.params.id
// 	res.send(data)
// })

app.delete("/api/notes/:id", (req, res, next) => {
	activeNote.deleteOne({ _id: req.params.id }).then(
		() => {
			res.status(200).json({
				message: 'Deleted!'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
});

app.post("/api/clear", function (req, res) {
	notes.length = 0;

	res.json({ ok: true });
})

module.exports = function (app) {
	app.get("/api/notes"), function (req, res) {
		res.json(notes);
	}
};


module.exports = app;