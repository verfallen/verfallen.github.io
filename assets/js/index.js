var myFullpage = new fullpage("#fullpage", {
	//导航
	menu: "#menus",
	lockAnchors: false,
	anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
	sectionsColor: [
		"#000000bb",
		"#d9da69bb",
		"#b0bab1cc",
		"#9068becc",
		"#f2cbbcbb"
	],
	onLeave: function(origin, destination) {
		const index = origin.index;
		const nextIndex = destination.index;

		if (index === 0 && nextIndex === 1) {
			$(".detail").addClass("animated zoomIn delay-.5s");
		}
	}
});

$(".project").hover(
	function() {
		var overlay = $(this).find(".project-overlay");
		overlay.removeClass(overlay.data("return")).addClass(overlay.data("hover"));
	},
	function() {
		var overlay = $(this).find(".project-overlay");
		overlay.removeClass(overlay.data("hover")).addClass(overlay.data("return"));
	}
);

const nine = [[1, 2, 3], [4, 5, 6], [6, 7, 8]];
function findIndexFrom(arr, n) {
	let result = "";
	arr.forEach((item, k) => {
		const key = item.indexOf(n);
		if (key !== -1) {
			result = `${k}-${item.indexOf(n)}`;
		}
	});
	return result;
}

// $(".project").on("mouseover", e => {
// 	const target = e.currentTarget;
// 	const [row, col] = findIndexFrom(nine, parseInt(target.dataset.index))
// 		.split("-")
// 		.map(v => parseInt(v, 10));
// 	const next = row === nine.length ? row - 1 : row + 1;
// 	const siblings = nine[row].filter((v, k) => k !== col);

// 	$(target)
// 		.stop(true, true)
// 		.animate({ width: "40%", height: "66%" });
// 	// .children(".img")
// 	// .animate({ width: "200%" });
// 	const $project = $(".project");

// 	for (let i = 0; i < $project.length; i++) {
// 		if (siblings.map(v => (v = v - 1)).includes(i))
// 			$($project[i])
// 				.stop(true, true)
// 				.animate({ width: "30%" });
// 		if (nine[next].includes(i))
// 			$($project[i])
// 				.stop(true, true)
// 				.animate({ width: "20%" });
// 		console.log($($project[i]).width());
// 	}
// });

// $(".project").on("mouseout", e => {
// 	const target = e.currentTarget;
// 	const [row, col] = findIndexFrom(nine, parseInt(target.dataset.index))
// 		.split("-")
// 		.map(v => parseInt(v, 10));
// 	const next = row === nine.length ? row - 1 : row + 1;
// 	const siblings = nine[row].filter((v, k) => k !== col);

// 	$(target)
// 		.stop(true, true)
// 		.animate({ width: "33.3%", height: "33.3%" });

// 	const $project = $(".project");

// 	for (let i = 0; i < $project.length; i++) {
// 		if (siblings.map(v => (v = v - 1)).includes(i))
// 			$($project[i])
// 				.stop(true, true)
// 				.animate({ width: "33.3%" });
// 		if (nine[next].includes(i))
// 			$($project[i])
// 				.stop(true, true)
// 				.animate({ width: "33.3%" });
// 	}
// });

$(".project1").mouseover(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "515px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "865px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "515px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "748px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "981px", top: "243px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project1").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
});

//project2
$(".project2").mouseover(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "187px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "188px", height: "228px", left: "203px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "243px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project2").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
});

//project3
$(".project3").mouseover(function(event) {
	$(".project3")
		.stop(true, true)
		.animate({ width: "500px", height: "471px", left: "700", top: "0px" }, 300);
	$(".project1")
		.stop(true, true)
		.animate({ width: "335px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "350px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "233px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "466px", top: "243px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project3").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
});

//project4
$(".project4").mouseover(function(event) {
	$(".project4")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "515px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "865px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "515px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "748px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "981px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project4").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
});

//project5
$(".project5").mouseover(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "187px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "188px", height: "228px", left: "203px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project5").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
});

//project6
$(".project6").mouseover(function(event) {
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "500px", height: "471px", left: "700", top: "243px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "350px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "233px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "466px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project6").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
});

$(".project").on("mouseover", function(e) {
	$(e.currentTarget)
		.children(".desc_container")
		.show()
		.css({
			display: "flex",
			alignItems: "center"
		});
});
$(".project").on("mouseout", function(e) {
	$(e.currentTarget)
		.children(".desc_container")
		.hide();
});
