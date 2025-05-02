function check_input(){
    let a = selectedElement[0];
    let b = selectedElement[1];
    let spaced = false;
    let valid = true;
    let dy;
    let dx;


    if ((a.getValue()!==b.getValue())&&((a.getValue()+ b.getValue())!==10)){
        wrongInput();
    }
    else{
        if(a.getRow()===b.getRow()){
            if (Math.abs(a.getCol()-b.getCol())>1){
                spaced=true;
            }
            for(let i = Math.min(a.getCol(),b.getCol())+1;i<Math.max(a.getCol(),b.getCol());i++){
                let buf = ga.getElementCoordinates(a.getRow(),i);
                if (buf.getStatus()!==2){
                    valid=false;
                    spaced=false;
                    break;
                }
            }
        }
        else if(a.getCol()===b.getCol()){
            if (Math.abs(a.getRow()-b.getRow())>1){
                spaced=true;
            }
            for(let i = Math.min(a.getRow(),b.getRow())+1;i<Math.max(a.getRow(),b.getRow());i++){
                let buf = ga.getElementCoordinates(i,a.getCol());
                if (buf.getStatus()!==2){
                    valid=false;
                    spaced=false;
                    break;
                }
            }
        }
        else if(Math.abs(a.getRow()-b.getRow())===Math.abs(a.getCol()-b.getCol())){
            if (Math.abs(a.getRow()-b.getRow())>1){
                spaced=true;
            }
            if((a.getRow()-b.getRow())>0){
                dy=-1;
            }
            else{
                dy=1;
            }
            if((a.getCol()-b.getCol())>0){
                dx=-1;
            }
            else{
                dx=1;
            }
            for(let i=1;i<Math.abs(a.getRow()-b.getRow());i++){
                let buf = ga.getElementCoordinates(a.getRow()+(i*dy),a.getCol()+(i*dx));
                if (buf.getStatus()!==2){
                    valid=false;
                    spaced=false;
                    break;
                }
            }
        }
        else{
            if (Math.abs(a.getChainId()-b.getChainId())>1){
                spaced=true;
            }
            for(let i = Math.min(a.getChainId(),b.getChainId())+1;i<Math.max(a.getChainId(),b.getChainId());i++){
                let buf = ga.getElementChain(i);
                if (buf.getStatus()!==2){
                    valid=false;
                    spaced=false;
                    break;
                }
            }
        }
        if(valid===false){
            wrongInput();
        }
        else{
            a.setStatus(2);
            b.setStatus(2);
            if(spaced===false){
                ga.addScore(ga.getStep());
            }
            else{
                ga.addScore(4*ga.getStep());
            }
            ga.saveGame();
            check_line(Math.max(a.getRow(),b.getRow()));
            check_line(Math.min(a.getRow(),b.getRow()));
            selectedElement=[];
            ga.saveGame();
            if(ga.getLife()===0){
                let result=globalSolver();
                if(result===undefined){
                    gameOver()
                }
            }
        }
    }
}

function check_line(row){
    let empty = true;
    for(let i =0;i<9;i++){
        let buf = ga.getElementCoordinates(row,i);
        if ((buf.getStatus()!==0)&&(buf.getStatus()!==2)){
            empty = false;
        }
    }
    if (empty===true){
        ga.addScore(10*ga.getStep());
        ga.delete_line(row);
        check_grid();
    }
}

function check_grid(){
    let buf = ga.getElementChain(0);
    if (buf.getStatus()===0){
        ga.addScore(150*ga.getStep());
        ga.addScore(50*ga.getStep()*ga.getLife());
        ga.setLife(5);
        ga.setStep(ga.getStep()+1);
        ga.startGrid();
    }
}

function wrongInput(){
    let a = selectedElement[0];
    let b = selectedElement[1];
    selectedElement=[];
    a.setStatus(5);
    b.setStatus(5);
    setTimeout(() => {
        a.setStatus(1);
        b.setStatus(1);
    }, 2000); // 2000ms = 2 secondes
    
}

function gameOver(){
    
    alert("la partie est finie\n votre score est de "+ ga.getScore() + "points");

    if (ga.getScore()>ga.getHighScore()){
        let entry = data.highscores.find(e => e.mode === ga.getMode());

        entry.score = ga.getScore(); // null si non trouvé
    }

    if (localStorage.getItem("hsdata") === null) {
        localStorage.setItem("hsdata", JSON.stringify(hs_data));
    } 
    hs_data = JSON.parse(localStorage.getItem("hsdata"));

    checkHs();

    const modeIndex = gameModes.indexOf(ga.getMode());
    let found = false;
    if (modeIndex !== -1) {
        if(hs_data.board[modeIndex].top.length<10){
            sendScore();
        }else{
            if(hs_data.board[modeIndex].top[hs_data.board[modeIndex].top.length -1].score<=ga.getScore()){
                sendScore();
            }
        }
    }

    

    data.gameSaved.status=0;
    saveData();
    window.location.href = menu;
}

