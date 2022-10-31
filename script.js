// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function navAll() {
    document.querySelector("#allTab").style.display="block"
    document.querySelector("#websitesTab").style.display="none"
    document.querySelector("#appsTab").style.display="none"
    document.querySelector("#frameworksTab").style.display="none"
}

function navWebsites() {
    document.querySelector("#allTab").style.display = "none";
    document.querySelector("#websitesTab").style.display = "block"
    document.querySelector("#appsTab").style.display="none"
    document.querySelector("#frameworksTab").style.display="none"
}

function navApps() {
    document.querySelector("#appsTab").style.display="block"
    document.querySelector("#allTab").style.display="none"
    document.querySelector("#frameworksTab").style.display="none"
    document.querySelector("#websitesTab").style.display="none"
}

function navFrameworks() {
    document.querySelector("#frameworksTab").style.display="block"
    document.querySelector("#allTab").style.display="none"
    document.querySelector("#websitesTab").style.display="none"
    document.querySelector("#appsTab").style.display="none"
}