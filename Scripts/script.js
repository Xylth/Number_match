let ga;
let gr;
let layout;



window.onload = function() {
    layout= localStorage.getItem("layout");
    window.addEventListener("orientationchange", function() {
        ga.saveGame();
        localStorage.setItem("game", "o");
        if((screen.orientation.angle===90)||(screen.orientation.angle===180)){
            layout="l";
            localStorage.setItem("layout", layout);
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html";
        }
        else{
            layout="p";
            localStorage.setItem("layout", layout);
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html";
        }
    });
    
    window.addEventListener("resize", function() {
        if ((window.innerWidth > window.innerHeight)&&(layout==="p")) { //landscape
            ga.saveGame();
            localStorage.setItem("game", "o");
            layout="l";
            localStorage.setItem("layout", layout);
            window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html";
    
        } else  if ((window.innerWidth < window.innerHeight)&&(layout==="l")){ //portrait
            ga.saveGame();
            localStorage.setItem("game", "o");
            layout="p";
            localStorage.setItem("layout", layout);
            window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html";
        }
    });

    launch_game();
    if (localStorage.getItem("game") ==="n"){
        localStorage.setItem("game", "o");
    }
    else{
        ga.restoreGame();
    }
    init_custom();
};

function launch_game() {
    if (localStorage.getItem("highscore") === null) {
        localStorage.setItem("highscore", 0);
    }

   init_global();

   
};

function init_global(){
    ga = new game();
    gr= ga.getChain();
    gr.fillgrid();

    initBtn();
    ga.setHighScore(localStorage.getItem("highscore"));
}

function reset_global(){
    ga.resetGameData();
    gr.clear_grid();

}

function resized(){
   
}


