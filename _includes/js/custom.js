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
function initThemeToggleIcon() {
  let themeToggle = document.getElementById('theme-toggle');
  if (jtd.getTheme() == 'light' || jtd.getTheme() == 'default') {
    themeToggle.className = 'fa-solid fa-toggle-on';
  } else {
    themeToggle.className = 'fa-solid fa-toggle-off';
  }
}

// Toggles the theme-toggle icon and updates the theme cookie.
function toggleThemeToggleIcon() {
  if (jtd.getTheme() == 'light') {
    jtd.setTheme('dark');
  } else {
    jtd.setTheme('light');
  }

  document.cookie='theme='+jtd.getTheme()+'; path=/';

  let themeToggle = document.getElementById('theme-toggle');
  if (themeToggle.className == 'fa-solid fa-toggle-on') {
    themeToggle.className = 'fa-solid fa-toggle-off';
  } else {
    themeToggle.className = 'fa-solid fa-toggle-on';
  }
}


