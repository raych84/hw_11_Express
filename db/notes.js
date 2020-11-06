const fs = require("fs");
// Class for notes
class Notes {
	constructor(title, text) {
		this.title = title;
		this.text = text;
	}
}

// Defined functions that read, write and delete
 function readNote(req, res)  {
	fs.readFile("/db.json", "utf8", (err, data) => {
		if (err) {
			console.error(err)
			return
		}
		console.log(data)
	})

}
function writeNote() {
	fs.writeFile("/db.json", Notes, err => {
		if (err) {
			console.error(err)
			return
		}
	})
	
	
}

module.exports = Notes();