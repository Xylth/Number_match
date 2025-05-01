window.onload = function() {
    const last = document.getElementById("lg");
    
    const ngame = document.getElementById("ng");

    const lvl = document.getElementById("level");
    
    if (localStorage.getItem(dataStr) === null) {
        localStorage.setItem(dataStr, JSON.stringify(data));
    } 
    else {
        data=JSON.parse(localStorage.getItem(dataStr));
        sanitizeData();
    }
    
    lvl.value = data.gameSaved.mode;
    if(checkOldData()){
        importOldData();
        deleteOldData();
    }

    if (data.gameSaved.status === 0) {
        last.style.display = "none"; 
    }

    ngame.addEventListener("click", function() {
        data.conf.continue = "n";
        data.conf.mode = lvl.value;
        if (window.innerWidth > window.innerHeight) { //landscape
            data.conf.layout = "l";
            saveData();
            window.location.href = landscape;
        } else { //portrait
            data.conf.layout = "p";
            saveData();
            window.location.href = portrait;
        }
        
    });

    last.addEventListener("click", function() {
        data.conf.continue = "o";
        data.conf.mode = data.gameSaved.mode;
        if (window.innerWidth > window.innerHeight) { //landscape
            data.conf.layout = "l";
            saveData();
            window.location.href = landscape;
        } else { //portrait
            data.conf.layout = "p";
            saveData();
            window.location.href = portrait;
        }
    });
};

function checkOldData(){
    let oldData=false;
    if (localStorage.getItem("backclr") !== null){
        oldData=true;
    }
    
    if (localStorage.getItem("borderclr") !== null){
        oldData=true;
    }
    
    if (localStorage.getItem("validnumberclr") !== null){
        oldData=true;
    }
    
    if (localStorage.getItem("deadnmbclr") !== null){
        oldData=true;
    }
    
    if (localStorage.getItem("clueclr") !== null){
        oldData=true;
    }

    if (localStorage.getItem("highscore")!==null){
        oldData=true;
    }

    if (localStorage.getItem("layout") !== null){
        oldData=true;
    }

    if (localStorage.getItem("game") !== null){
        oldData=true;
    }

    if (localStorage.getItem("level")!== null){
        oldData=true;
        }

    const game_data = localStorage.getItem("savedGame");

    if ((game_data!=="null")&&(game_data!==null)) {
        oldData=true;
    }
    return oldData;
}

function importOldData(){
    if (localStorage.getItem("backclr") !== null){
        data.colors.bckcolor=localStorage.getItem("backclr");
    }
    
    if (localStorage.getItem("borderclr") !== null){
        data.colors.bordercolor=localStorage.getItem("borderclr");
    }
    
    if (localStorage.getItem("validnumberclr") !== null){
        data.colors.valnmbcolor=localStorage.getItem("validnumberclr");
    }
    
    if (localStorage.getItem("deadnmbclr") !== null){
        data.colors.deadnmbcolor=localStorage.getItem("deadnmbclr");
    }
    
    if (localStorage.getItem("clueclr") !== null){
        data.colors.cluecolor=localStorage.getItem("clueclr");
    }

    if (localStorage.getItem("highscore")!==null){
        let entry = data.highscores.find(e => e.mode === "facile");

        entry.score = Number(localStorage.getItem("highscore")); 
    }

    if (localStorage.getItem("layout") !== null){
        data.conf.layout=localStorage.getItem("layout");
    }

    if (localStorage.getItem("game") !== null){
        data.conf.continue=localStorage.getItem("game");
    }

    if (localStorage.getItem("level")!== null){
        switch(Number(localStorage.getItem("level"))){
            case 3 :
                data.conf.mode="facile";
                break;
            case 2 :
                data.conf.mode="moyen";
                break;
            case 1 :
                data.conf.mode="difficile";
                break;
        }
    }

    const game_data = localStorage.getItem("savedGame");

    if ((game_data!=="null")&&(game_data!==null)) {
        const dataparsed = JSON.parse(game_data);
        data.gameSaved.status=1;
        switch(Number(dataparsed.level)){
            case 3 :
                data.gameSaved.mode="facile";
                break;
            case 2 :
                data.gameSaved.mode="moyen";
                break;
            case 1 :
                data.gameSaved.mode="difficile";
                break;
        }
        data.gameSaved.life=Number(dataparsed.life);
        data.gameSaved.score=Number(dataparsed.score);
        data.gameSaved.step=Number(dataparsed.step);
        data.gameSaved.grid=[];
        for (let i = 0; i < dataparsed.grid.length; i++) {
            let el= dataparsed.grid[i];
            data.gameSaved.grid.push({ 
                value: Number(el.value), 
                status: Number(el.status) 
            });
        }
    }
}


function deleteOldData(){
    localStorage.removeItem("backclr");
    localStorage.removeItem("borderclr");
    localStorage.removeItem("validnumberclr");
    localStorage.removeItem("deadnmbclr");
    localStorage.removeItem("clueclr");
    localStorage.removeItem("highscore");
    localStorage.removeItem("layout");
    localStorage.removeItem("game");
    localStorage.removeItem("level");
    localStorage.removeItem("savedGame");
}
