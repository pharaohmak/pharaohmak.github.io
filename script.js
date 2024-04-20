// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Script to navigate portfolio tabs
function navAll() {
  document.querySelector("#capstone-tab").style.display = "block";
  document.querySelector("#website-tab").style.display = "none";
  document.querySelector("#app-tab").style.display = "none";
  document.querySelector("#programs-tab").style.display = "none";

  document.getElementById("capstone-tab").style.backgroundColor = "#000";
  document.getElementById("website-tab").style.backgroundColor = "#fff";
  document.getElementById("app-tab").style.backgroundColor = "#fff";
  document.getElementById("programs-tab").style.backgroundColor = "#fff";
}

function navWebsites() {
  document.querySelector("#capstone-tab").style.display = "none";
  document.querySelector("#website-tab").style.display = "block";
  document.querySelector("#app-tab").style.display = "none";
  document.querySelector("#programs-tab").style.display = "none";

  document.getElementById("capstone-tab").style.backgroundColor = "#fff";
  document.getElementById("website-tab").style.backgroundColor = "#000";
  document.getElementById("app-tab").style.backgroundColor = "#fff";
  document.getElementById("programs-tab").style.backgroundColor = "#fff";
}

function navComponents() {
  document.querySelector("#capstone-tab").style.display = "none";
  document.querySelector("#website-tab").style.display = "none";
  document.querySelector("#app-tab").style.display = "block";
  document.querySelector("#programs-tab").style.display = "none";

  document.getElementById("capstone-tab").style.backgroundColor = "#fff";
  document.getElementById("website-tab").style.backgroundColor = "#fff";
  document.getElementById("app-tab").style.backgroundColor = "#000";
  document.getElementById("programs-tab").style.backgroundColor = "#fff";
}

function navPrograms() {
  document.querySelector("#capstone-tab").style.display = "none";
  document.querySelector("#website-tab").style.display = "none";
  document.querySelector("#app-tab").style.display = "none";
  document.querySelector("#programs-tab").style.display = "block";

  document.getElementById("capstone-tab").style.backgroundColor = "#fff";
  document.getElementById("website-tab").style.backgroundColor = "#fff";
  document.getElementById("app-tab").style.backgroundColor = "#fff";
  document.getElementById("programs-tab").style.backgroundColor = "#000";
}
