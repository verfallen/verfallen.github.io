const express = require("express");
const nunjucks = require("nunjucks");
const stylus = require("stylus");
const nib = require("nib");
const path = require("path");
const fs = require("fs");

const json = require("./assets/json/data.json");

var app = express();

function compile(str, path) {
	return stylus(str)
		.set("filename", path)
		.use(nib());
}

nunjucks.configure("views", {
	autoescape: true,
	express: app,
	watch: true
});

app.use(express.static(path.join(__dirname, "assets")));

app.use(
	stylus.middleware({
		src: path.join(__dirname, "./assets"),
		// dest: path.join(__dirname, "./assets/style"),
		compile: compile
	})
);

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
