function opennav() {
    document.getElementById("navbarlist").style.display = "inline";
    document.getElementById("hamburgericon").style.display ="none";
    document.getElementById("closeicon").style.display = "block";
}

function closenav(){
    document.getElementById("navbarlist").style.display = "none";
    document.getElementById("closeicon").style.display = "none";
    document.getElementById("hamburgericon").style.display ="block";
}