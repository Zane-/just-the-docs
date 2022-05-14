// Initializes the theme based on the theme cookie.
(function initTheme() {
  var cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		let [key, value] = cookie.split('=');
		if (key == 'theme') {
			jtd.setTheme(value);
		}
	}
})();

// Initializes the classes for the theme-toggle icon based on the theme.
function initThemeToggle() {
  let themeToggle = document.getElementById('theme-checkbox');
  themeToggle.checked = (['light', 'default'].includes(jtd.getTheme()));
}

// Toggles the theme-toggle icon and updates the theme cookie.
function toggleThemeIcon() {
  if (jtd.getTheme() == 'light') {
    jtd.setTheme('dark');
  } else {
    jtd.setTheme('light');
  }

  document.cookie='theme='+jtd.getTheme()+'; path=/';
}