// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// ############################################################################
// ############################################################################
let a = document.querySelector(".all-header");

let allimg = [
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/01.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/02.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/03.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/04.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/05.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/06.png")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/07.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/08.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/09.jpg")',
  'url("D:College/Web/Web_Projects_2024/My_bootstrap_example/images/10.jpg")',
];

let b;

function startRandomBackground() {
  b = setInterval(function () {
    let anyrandom = Math.floor(Math.random() * allimg.length);
    a.style.backgroundImage = allimg[anyrandom];
  }, 5000);
}

startRandomBackground();

// ############################################################################
// ############################################################################

let c = document.querySelector(".chosee-opt .yes");
let d = document.querySelector(".chosee-opt .no");

c.addEventListener("click", function () {
  c.classList.toggle("opacity-50");
  d.classList.toggle("opacity-50");
  startRandomBackground();
});
d.addEventListener("click", function () {
  clearInterval(b);
  c.classList.toggle("opacity-50");
  d.classList.toggle("opacity-50");
});

// ############################################################################
// ############################################################################

let e = document.querySelector(".bullets-opt .yes");
let f = document.querySelector(".bullets-opt .no");

let g = document.querySelector(".bullets");

e.addEventListener("click", function () {
  e.classList.toggle("opacity-50");
  f.classList.toggle("opacity-50");

  g.classList.remove("d-none");
});

f.addEventListener("click", function () {
  e.classList.toggle("opacity-50");
  f.classList.toggle("opacity-50");

  g.classList.add("d-none");
});

// ############################################################################
// ############################################################################

const mybullets = document.querySelectorAll(".all-bullet li");

mybullets.forEach((element) => {
  element.addEventListener("click", function () {
    const targetId = element.querySelector("a").getAttribute("href");
    // Select the target section using the href value
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView();
  });
});

const mynavlinks = document.querySelectorAll(".navbar-nav li");
mynavlinks.forEach((e) => {
  e.addEventListener("click", function () {
    const mysectionname = document.querySelector(a).getAttribute("href");
    const mysectioncode = document.querySelector(mysectionname);
    mysectioncode.scrollIntoView();
  });
});

// ############################################################################
// ############################################################################

// Select all color swatches
const colorSwatches = document.querySelectorAll(".sett-opt-box ul li");

// Add click event listeners to each swatch
colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", function () {
    // Pass the clicked swatch to the applyColorTheme function
    applyColorTheme(swatch);
  });
});

// Function to apply the selected color theme
function applyColorTheme(swatch) {
  // Get the color value from the Bootstrap class
  const color = getComputedStyle(swatch).backgroundColor;

  // Apply the color to specific elements on the page
  document.querySelector(".navbar-brand").style.color = color; // Navbar brand
  document.querySelector(".navbar").style.backgroundColor = color; // Navbar background
  document.querySelector(".landing").style.backgroundColor = color; // Landing section background
  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.style.backgroundColor = color; // Primary buttons
    btn.style.borderColor = color;
  });
  document.querySelectorAll(".text-success").forEach((text) => {
    text.style.color = color; // Success text
  });
}
