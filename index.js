const express = require("express")
const app = express()
// Mount Express static middleware to resolve incoming requests by mapping URL paths
// to files in the "public" directory; serves assets directly without custom route handlers
app.use(express.static("public"));

exports.webApp = app;
