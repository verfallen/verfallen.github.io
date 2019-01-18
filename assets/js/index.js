var myFullpage = new fullpage("#fullpage", {
	//导航
	menu: "#menus",
	lockAnchors: false,
	anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
	sectionsColor: [
		"#000000bb",
		"#d9da69bb",
		"#993399cc",
		"#ffaaddcc",
		"#000000cc"
	],
	onLeave: function(origin, destination) {
		const index = origin.index;
		const nextIndex = destination.index;

		if (index === 0 && nextIndex === 1) {
			$(".detail").addClass("animated zoomIn delay-.5s");
		}
	}
});
