// require express
const express = require("express");
const apiRoutes = require("./routes/htmlRoutes");
const htmlRoutes = require("./routes/htmlRoutes");



// Initialize the app and create a PORT.
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", apiRoutes);
app.use("/",htmlRoutes);

app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listen on PORT: http://localhost${PORT}`));