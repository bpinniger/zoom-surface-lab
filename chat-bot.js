const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

app.set("trust proxy", 1);
app.set("strict routing", true);

app.use(bodyParser.json());

app.listen(port, () => console.log(`Ask Bot for Zoom listening on port ${port}!`));
