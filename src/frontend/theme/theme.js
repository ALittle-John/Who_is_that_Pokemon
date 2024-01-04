const btn = document.getElementById('DarkMode');
const imageChange = document.getElementById('generalTheme');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let isDark = document.body.classList.contains('dark');

  if (isDark) {
    imageChange.src = '../assets/icons8-pokemon-64.png';
  } else {
    imageChange.src = '../assets/icons8-pokemon-96.png';
  }
});
