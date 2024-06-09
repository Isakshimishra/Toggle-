document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
  
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
  
      // Change the icon based on the current theme
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '🌜';
      } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌞';
      }
    });
  
    // Load the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme + '-mode');
      themeIcon.textContent = savedTheme === 'dark' ? '🌜' : '🌞';
    } else {
      document.body.classList.add('light-mode');
      themeIcon.textContent = '🌞';
    }
  });
  
