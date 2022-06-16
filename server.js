const express = require('express');
const app = express();
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes/apiRoutes.js");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
