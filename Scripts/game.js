class game{

    constructor(){
        this.life=0;
        this.step=0;
        this.score=0;
        this.highScore=0;
        this.mode="";
        this.status=0;
        this.chain = new grid();
    }

    getLife(){
        return this.life;
    }
    
    getStep(){
        return this.step;
    }

    getScore(){
        return this.score;
    }
    
    getHighScore(){
        return this.highScore;
    }

    getMode(){
        return this.mode;
    }

    getStatus(){
        return this.status;
    }
    
    getChain(){
        return this.chain;
    }

    setLife(val){
        this.life = val;
        data.gameSaved.life = val;
        document.querySelector('#life').innerHTML=this.life;

    }
    
    setStep(val){
        this.step = val;
        data.gameSaved.step = val;
        document.querySelector('#step').innerHTML=this.step;
    }

    setScore(val){
        this.score = val;
        data.gameSaved.score = val;
        document.querySelector('#score').innerHTML=this.score;
    }
    
    setHighScore(){
        let entry = data.highscores.find(e => e.mode === this.mode);

        let val = entry ? entry.score : 0; // null si non trouvé
        this.highScore = val;
        document.querySelector('#highScore').innerHTML=this.highScore;
    }

    setMode(val){
        this.mode = val;
        data.gameSaved.mode = val;
    }

    setStatus(val){
        this.status = val;
        data.gameSaved.status = val;
    }

    addScore(val){
        this.score+=val;
        if (this.score<0){
            this.score=0;
        }
        data.gameSaved.score=this.score;
        document.querySelector('#score').innerHTML=this.score;
    }

    feeder(){
        if(this.life>0){
            this.setLife(this.life-1);
            this.chain.feedGrid();
            this.saveGame();
        }
    }

    newGame(){
        this.setLife(5);
        this.setStep(1);
        this.setScore(0);
        this.setMode(data.conf.mode);
        this.setHighScore();
        this.setStatus(1);
        this.chain.startGrid();
        this.saveGame();
    }
 
    saveGame(){
        this.chain.saveGrid()
        saveData();
    }

    restoreGame(){
        this.setLife(data.gameSaved.life);
        this.setStep(data.gameSaved.step);
        this.setScore(data.gameSaved.score);
        this.setMode(data.gameSaved.mode);
        this.setHighScore();
        this.setStatus(data.gameSaved.status);
        this.chain.restoreGrid();
        
    }

    getElementCoordinates(row,col){
        return this.chain.getElementCoordinates(row,col);
    }

    delete_line(row){
        this.chain.delete_line(row);
    }

    getElementChain(val){
        return this.chain.getElementChain(val);
    }

    startGrid(){
        this.chain.startGrid();
        this.saveGame();
    }
}


