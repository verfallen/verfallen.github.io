const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const fs = require("fs");
var app = express();
const json = require("./assets/json/data.json");

nunjucks.configure("views", {
	autoescape: true,
	express: app
});

app.get("/", function(req, res) {
	const data = Object.assign(json, { js: "index", css: "index" });
	res.render("index.njk", data);
});

app.get("/:filename.html", function(req, res, next) {
	const filename = req.params.filename;

	const csspath = path.join(__dirname, `assets/css${filename}.css`);
	const jspath = path.join(__dirname, `assets/js/${filename}.js`);
	const data = Object.assign({}, json);
	try {
		if (fs.existsSync(csspath)) {
			data.css = filename;
		}

		if (fs.existsSync(jspath)) {
			data.js = filename;
		}

		res.render(`${filename}.njk`, data);
	} catch (error) {
		next(error);
	}
});

app.listen(3001);
