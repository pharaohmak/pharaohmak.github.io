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
    document.querySelector("#websitesTab").style.display = "none"
    document.querySelector("#componentsTab").style.display = "none"
    document.querySelector("#programsTab").style.display = "none"
    document.querySelector("#allTab").style.display = "block"
}

function navWebsites() {
    document.querySelector("#allTab").style.display = "none";
    document.querySelector("#componentsTab").style.display = "none"
    document.querySelector("#programsTab").style.display = "none"
    document.querySelector("#websitesTab").style.display = "block"
}

function navComponents() {
    document.querySelector("#websitesTab").style.display = "none"
    document.querySelector("#allTab").style.display = "none"
    document.querySelector("#programsTab").style.display = "none"
    document.querySelector("#componentsTab").style.display = "block"
}

function navPrograms() {
    document.querySelector("#allTab").style.display = "none"
    document.querySelector("#componentsTab").style.display = "none"
    document.querySelector("#websitesTab").style.display = "none"
    document.querySelector("#programsTab").style.display = "block"
}