var myFullpage = new fullpage("#fullpage", {
	//导航
	menu: "#menu",
	lockAnchors: false,
	anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
	sectionsColor: [
		"#000000cc",
		"#3f5f9acc",
		"#993399cc",
		"#ffaaddcc",
		"#000000cc"
	],
	//切换菜单
	onLeave: function(origin, destination) {
		const $menu = $(".menu");
		const index = destination.index;

		$menu.removeClass("active");
		$menu[index].classList.add("active");
	}
});
