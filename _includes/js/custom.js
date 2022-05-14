(function () {
  let cookies = {};

  document.cookie.split(';').forEach(function(el) {
	let [key,value] = el.split('=');
	  cookies[key.trim()] = value;
  });

  if (cookies["theme"]) {
	console.log(cookies["theme"]);
	jtd.setTheme(cookies["theme"]);
  }
})();
