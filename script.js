const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageMode(color) {
  const images = [image1, image2, image3];
  images.forEach((image) => {
    image.src = `img/${image.id}-${color}.svg`;
  });
}

function toggleMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

function themeChange(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "root");
    localStorage.setItem("theme", "root");
    toggleMode(false);
  }
}

toggleSwitch.addEventListener("change", themeChange);

//Applying the theme for returning users based on Local Storage.

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
  if (storedTheme === "dark") {
    toggleSwitch.checked = true;
    toggleMode(true);
  }
}
