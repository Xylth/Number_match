let data = {
    colors: {
        bckcolor: "rgb(255, 255, 255)",
        scorecolor:"rgb(0,0,0)",
        subtxtcolor:"rgb(164,164,164)",
        btncolor:"rgb(0,0,0)",
        bordercolor : "rgb(0,0,0)",
        bckpaircolor: "rgb(255, 255, 255)",
        bckimpaircolor: "rgb(230, 230, 255)",
        selectioncolor : "rgb(122, 217, 255)",
        cluecolor : "rgb(50, 186, 68)",
        failcolor : "rgb(255,0,0)",
        valnmbcolor : "rgb(0,0,0)",
        deadnmbcolor : "rgb(164,164,164)",
        selnmbcolor : "rgb(0, 0, 0)",
        cluenmbcolor : "rgb(0, 0, 0)",
        failnmbcolor : "rgb(0, 0, 0)"
    },
    highscores: [
        { mode: "facile", score: 0 },
        { mode: "moyen", score: 0 },
        { mode: "difficile", score: 0 }
    ],
    conf: {
        mode: "facile",
        continue: "n",
        layout: "l",
        pseudo: "anonyme"
    },

    gameSaved: {
        status: 0,
        score: 0,
        life: 5,
        step: 1,
        mode: "facile",
        grid: [
            { value: 0, status: 0 }
        ]
    }
};

let hs_data= {
    last_update: {
        day : "", // Date in format "DD/MM/YYY" new Date().toLocaleDateString('fr-FR');
        quarter : 0
    },

    board : [
        { 
            mode: "",
            top: [
                {pseudo: "", score: 0}
            ]
        }
    ],
    loading: 0,
};

const gameModes = ["facile", "moyen", "difficile"];


let defaultColors = {
    bckcolor: "rgb(255, 255, 255)",
    scorecolor:"rgb(0,0,0)",
    subtxtcolor:"rgb(164,164,164)",
    btncolor:"rgb(0,0,0)",
    bordercolor : "rgb(0,0,0)",
    bckpaircolor: "rgb(255, 255, 255)",
    bckimpaircolor: "rgb(230, 230, 255)",
    selectioncolor : "rgb(122, 217, 255)",
    cluecolor : "rgb(50, 186, 68)",
    failcolor : "rgb(255,0,0)",
    valnmbcolor : "rgb(0,0,0)",
    deadnmbcolor : "rgb(164,164,164)",
    selnmbcolor : "rgb(0, 0, 0)",
    cluenmbcolor : "rgb(0, 0, 0)",
    failnmbcolor : "rgb(0, 0, 0)"
};

function sanitizeData(){
    if (Array.isArray(data.highscores)) {
        data.highscores.forEach(entry => {
            entry.score = Number(entry.score);
        });
    }

    data.gameSaved.status = Number(data.gameSaved.status);
    data.gameSaved.score = Number(data.gameSaved.score);
    data.gameSaved.life = Number(data.gameSaved.life);
    data.gameSaved.step = Number(data.gameSaved.step);

    if (Array.isArray(data.gameSaved.grid)) {
        data.gameSaved.grid.forEach(entry => {
            entry.value = Number(entry.value);
            entry.status = Number(entry.status);
        });
    }
}

function saveData(){
    localStorage.setItem(dataStr, JSON.stringify(data));
}

function saveHS(){
    localStorage.setItem("hsdata", JSON.stringify(hs_data));
}