let ga;
let gr;
let phase;


window.onload = function() {
    
    launch_game();
    if (phase <2){
        phase+=2;
    }
    else{
        ga.restoreGame()
    }
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
    initBtn();
    ga.setHighScore(localStorage.getItem("highscore"));
}

function reset_global(){
    ga.resetGameData();
    gr.clear_grid();
    gr.fillGrid();

}

window.addEventListener("orientationchange", function() {
    ga.saveGame();
    if((screen.orientation.angle===90)||(screen.orientation.angle===180)){
        phase=3;
        window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html";
    }
    else{
        phase=4;
        window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html";
    }
});

window.addEventListener("resize", function() {
    if ((window.innerWidth > window.innerHeight)&&(phase===4)) { //landscape
        ga.saveGame();
        phase=3;
        window.location.href = "https://xylth.github.io/Number_match/Landscape/game.html";

    } else  if ((window.innerWidth < window.innerHeight)&&(phase===3)){ //portrait
        ga.saveGame();
        phase=4;
        window.location.href = "https://xylth.github.io/Number_match/Portrait/game.html";
    }
});
