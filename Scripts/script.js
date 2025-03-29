let ga;
let gr;

window.onload = function() {
    // Appeler la fonction à l'ouverture de la page
   init_global();
   lockToLandscape();
};

function init_global(){
    ga = new game();
    gr= ga.getChain();
    initBtn();
}

function reset_global(){
    ga.resetGameData();
    gr.clear_grid();
    gr.fillGrid();

}
