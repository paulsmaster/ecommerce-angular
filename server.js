const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const { bodyParser, router } = require("json-server");
const auth = require("./authMiddleware");

const enableHttps = false;
const ssloptions = {}

if (enableHttps) {
  ssloptions.cert = fs.readFileSync("./ssl/sportsstore.crt");
  ssloptions.key = fs.readFileSync("./ssl/sportsstore.pem");
}

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));

app.listen(80, () => console.log("HTTPS Server is running on port 80");)

if (enableHttps) {
  https.createServer(ssloptions, app).listen(443, () => console.log("HTTPS Server is running on port 443");)
} else {
  console.log("HTTPS disabled");
}

