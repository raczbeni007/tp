// Toggle the visibility of the icon menu
function toggleMenu() {
  var menu = document.getElementById("iconMenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Toggle the visibility of the icon menu and switch the icon image
function toggleMenu() {
  var menu = document.getElementById("iconMenu");
  var icon = document.getElementById("floatingIcon");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
    icon.src = "contact.png"; // Change back to kontakt.png
    icon.style.right = "30.5px";
  } else {
    menu.style.display = "flex";
    icon.src = "cancel.png"; // Change to cancel.png
    icon.style.right = "30px";
  }
}

function toggleMode() {
  var mod = document.getElementById("mod");
  var srcFileName = mod.src.split("/").pop();
  var allLinks = document.querySelectorAll("a");
  if (srcFileName == "light.png") {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "#171717";
    allLinks.forEach(function (link) {
      link.style.color = "#171717";
    });
    var footer = document.querySelector("footer");

    // Select all <a> elements within the footer
    var footerLinks = footer.querySelectorAll("a");
    footerLinks.forEach(function (link) {
      link.style.color = "#f5f5f5";
    });
    mod.src = "dark.png";
    mod.title = "Sötét téma";
  }
  if (srcFileName == "dark.png") {
    document.body.style.backgroundColor = "#171717";
    document.body.style.color = "#f5f5f5";
    allLinks.forEach(function (link) {
      link.style.color = "#f5f5f5";
    });
    var footer = document.querySelector("footer");

    // Select all <a> elements within the footer
    var footerLinks = footer.querySelectorAll("a");
    footerLinks.forEach(function (link) {
      link.style.color = "#f5f5f5";
    });
    mod.src = "light.png";
    mod.title = "Világos téma";
  }
}

function updateImageBasedOnColorScheme(event) {
  var modImg = document.getElementById("mod");

  if (event.matches) {
    // If the system is in dark mode
    modImg.src = "light.png";
    mod.title = "Világos téma";
  } else {
    // If the system is in light mode
    modImg.src = "dark.png";
    mod.title = "Sötét téma";
  }
}

function reloadOnColorSchemeChange(event) {
  if (event.matches || !event.matches) {
    location.reload(); // Reload the page when the color scheme changes
  }
}

// Check the initial color scheme when the script runs
var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
updateImageBasedOnColorScheme(prefersDarkMode);

// Listen for changes in the color scheme and update the image
prefersDarkMode.addEventListener("change", function (event) {
  updateImageBasedOnColorScheme(event);
  reloadOnColorSchemeChange(event); // Reload the page when the color scheme changes
});
