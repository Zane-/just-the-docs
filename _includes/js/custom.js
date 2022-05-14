(function () {
  let cookies = {};

  document.cookie.split(';').forEach(function(el) {
	let [key,value] = el.split('=');
	  cookies[key.trim()] = value;
  });

  jtd.setTheme(cookies["theme"]);
})();
