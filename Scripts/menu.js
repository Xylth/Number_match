window.onload = function() {
    const last = document.getElementById("lg");
    
    const ngame = document.getElementById("ng");
    
    if ((localStorage.getItem("score") === null)||(localStorage.getItem("grid_val") === null)||(localStorage.getItem("grid_sta") === null)||(localStorage.getItem("life") === null)||(localStorage.getItem("step") === null)){
        last.style.display = "none"; 
    }


    ngame.addEventListener("click", function() {
        
        localStorage.setItem("game", "n");
        if (window.innerWidth > window.innerHeight) { //landscape
            localStorage.setItem("layout", "l");
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html"; // Remplace par ton URL
        } else { //portrait
            localStorage.setItem("layout", "p");
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html"; // Remplace par ton URL
        }
        
    });
};
