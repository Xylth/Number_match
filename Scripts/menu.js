let diff;

window.onload = function() {
    const last = document.getElementById("lg");
    
    const ngame = document.getElementById("ng");

    const lvl = document.getElementById("level");

    diff =3;

    
    localStorage.setItem("level",diff);

    const game_data = localStorage.getItem("savedGame");

    if (game_data==="null"||game_data===null) {
    
        last.style.display = "none"; 
    }


    ngame.addEventListener("click", function() {
        
        localStorage.setItem("game", "n");
        localStorage.setItem("level",diff);
        if (window.innerWidth > window.innerHeight) { //landscape
            localStorage.setItem("layout", "l");
            window.location.href = landscape;
        } else { //portrait
            localStorage.setItem("layout", "p");
            window.location.href = portrait;
        }
        
    });

    last.addEventListener("click", function() {
        
        localStorage.setItem("game", "o");
        if (window.innerWidth > window.innerHeight) { //landscape
            localStorage.setItem("layout", "l");
            window.location.href = landscape;
        } else { //portrait
            localStorage.setItem("layout", "p");
            window.location.href = portrait;
        }
        
    });

    lvl.addEventListener('change', function() {
        diff = this.value;
        switch (diff) {
            case "easy":
                diff=3;
              break;
            case "medium":
                diff=2;
              break;
            case "hard":
              diff=1;
              break;
        }
        localStorage.setItem("level",diff);
    });
};
