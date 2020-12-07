// const fs = require("fs");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);
// // Class for notes
// class Notes {
// 	constructor(title, text) {
// 		this.title = title;
// 		this.text = text;
// 	}
// }

// // Defined functions that read, write and delete
//  function readNote(req, res)  {
// 	fs.readFile("db/db.json", "utf8", (err, data) => {
// 		if (err) {
// 			console.error(err)
// 			return
// 		}
// 		console.log(data)
// 	})

// }
// function newNote(req, res) {
// 	fs.writeFile("db/db.json", Notes, err => {
// 		if (err) {
// 			console.error(err)
// 			return
// 		}
// 	})
	
	
// }
// function deleteNote(id){
	
// }

// module.exports = Notes();