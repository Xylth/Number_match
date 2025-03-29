let ga;
let gr;

window.onload = function() {

    if (localStorage.getItem("highscore") === null) {
        localStorage.setItem("highscore", "0");
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
