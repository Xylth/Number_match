let diff;

window.onload = function() {
    const last = document.getElementById("lg");
    
    const ngame = document.getElementById("ng");

    const lvl = document.getElementById("level");

    diff =3;

    
    if ((localStorage.getItem("score") === null)||(localStorage.getItem("grid_val") === null)||(localStorage.getItem("grid_sta") === null)||(localStorage.getItem("life") === null)||(localStorage.getItem("step") === null)){
        last.style.display = "none"; 
    }


    ngame.addEventListener("click", function() {
        
        localStorage.setItem("game", "n");
        localStorage.setItem("level",diff);
        if (window.innerWidth > window.innerHeight) { //landscape
            localStorage.setItem("layout", "l");
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html"; // Remplace par ton URL
        } else { //portrait
            localStorage.setItem("layout", "p");
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html"; // Remplace par ton URL
        }
        
    });

    last.addEventListener("click", function() {
        
        localStorage.setItem("game", "o");
        if (window.innerWidth > window.innerHeight) { //landscape
            localStorage.setItem("layout", "l");
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html"; // Remplace par ton URL
        } else { //portrait
            localStorage.setItem("layout", "p");
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html"; // Remplace par ton URL
        }
        
    });

    lvl.addEventListener('change', function() {
        diff = this.value;
        switch (diff) {
            case "Facile":
                diff=3;
              break;
            case "Moyen":
                diff=2;
              break;
            case "Difficile":
              diff=1;
              break;
        }
    });
};
