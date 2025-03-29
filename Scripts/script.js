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

function lockToLandscape() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock("landscape").catch((err) => {
                    console.log("Échec du verrouillage d'orientation :", err);
                });
            }
        }).catch((err) => {
            console.log("Impossible d'activer le mode plein écran :", err);
        });
    } else {
        console.log("Le mode plein écran n'est pas supporté.");
    }
}