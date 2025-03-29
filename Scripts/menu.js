window.onload = function() {
    const last = document.getElementById("lg");
    
    const ngame = document.getElementById("ng");
    
    if ((localStorage.getItem("score") === null)||(localStorage.getItem("chain") === null)||(localStorage.getItem("life") === null)||(localStorage.getItem("step") === null)) {
        last.style.display = "none"; 
    }


    ngame.addEventListener("click", function() {
        
        if (window.innerWidth > window.innerHeight) { //landscape
            phase=0;
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html"; // Remplace par ton URL
        } else { //portrait
            phase=1;
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html"; // Remplace par ton URL
        }
        
    });
};
