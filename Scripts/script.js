let ga;

window.onload = function() {
    if (localStorage.getItem(dataStr) === null) {
        localStorage.setItem(dataStr, JSON.stringify(data));
    } 
    else {
        data=JSON.parse(localStorage.getItem(dataStr));
        sanitizeData();
    }
    window.addEventListener("orientationchange", function() {
        data.conf.continue="o";
        if((screen.orientation.angle===90)||(screen.orientation.angle===180)){
            data.conf.layout="l";
            saveData();
            window.location.href = landscape;
        }
        else{
            data.conf.layout="p";
            saveData();
            window.location.href = portrait;
        }
    });
    
    window.addEventListener("resize", function() {
        data.conf.continue="o";
        if ((window.innerWidth > window.innerHeight)&&(data.conf.layout==="p")) { //landscape
            data.conf.layout="l";
            saveData();
            window.location.href = landscape;
    
        } else  if ((window.innerWidth < window.innerHeight)&&(data.conf.layout==="l")){ //portrait
            data.conf.layout="p";
            saveData();
            window.location.href = portrait;
        }
    });

    init_global();

    if (data.conf.continue ==="n"){
        ga.newGame();
    }
    else{
        ga.restoreGame();
    }
};

function init_global(){
    ga = new game();

    initBtn();
    init_custom();

}



