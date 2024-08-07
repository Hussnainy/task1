const themeButton = document.querySelector('.theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
  console.log('Button clicked'); // Check if this message appears in the console
  body.classList.toggle('light-theme');
});
