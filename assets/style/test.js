Array.from(document.getElementsByTagName("div")).forEach(v => {
	v.style.backgroundColor = (function() {
		return (
			"#" +
      (function(color) {
      	return (color += "0123456789abcdef"[Math.floor(Math.random() * 16)]) &&
          color.length == 6
      		? color
      		: arguments.callee(color);
      })("")
		);
	})();
});
