class game{

    constructor(){
        this.base_life=5;
        this.initGameData();
        this.chain = new grid();
        this.chain.fillGrid();

    }

    initGameData(){
        this.resetScore();
        this.resetHighScore();
        this.resetStep();
        this.resetLife();
    }

    resetGameData(){
        if(this.getHighScore()<this.getScore()){
            this.setHighScore(this.getScore());
        } 
        this.resetScore();
        this.resetStep();
        this.resetLife();
    }

    nextStep(){
        this.resetLife();
        this.addStep();
        this.chain.fillGrid();
    }

    getScore(){
        return this.score;
    }
    
    getHighScore(){
        return this.highScore;
    }

    getStep(){
        return this.step;
    }

    getLife(){
        return this.life;
    }

    setScore(val){
        if (val<0){
            this.score=0;
        }
        else{
            this.score=val;
        }
        document.querySelector('#score').innerHTML=this.score;
        return this.score;
    }

    addScore(val){
        this.score+=val;
        if (this.score<0){
            this.score=0;
        }
        document.querySelector('#score').innerHTML=this.score;
        return this.score;
    }

    resetScore(){
        this.score=0;
        document.querySelector('#score').innerHTML=this.score;
        return this.score;
    }

    setHighScore(val){
        if (val<0){
            this.highScore=0;
        }
        else{
            this.highScore=val;
        }
        document.querySelector('#highScore').innerHTML=this.highScore;
        return this.highScore;
    }

    resetHighScore(){
        this.highScore=0;
        document.querySelector('#highScore').innerHTML=this.highScore;
        return this.highScore;
    }

    setStep(val){
        if (val<1){
            this.step=1;
        }
        else{
            this.step=val;
        }
        document.querySelector('#step').innerHTML=this.step;
        return this.step;
    }

    addStep(){
        this.step++;
        document.querySelector('#step').innerHTML=this.step;
        return this.step;
    }

    resetStep(){
        this.step=1;
        document.querySelector('#step').innerHTML=this.step;
        return this.step;
    }

    setLife(val){
        if (val<0){
            this.life=0;
        }
        else if (val>this.base_life){
            this.life=this.base_life;
        }
        else{
            this.life=val;
        }
        document.querySelector('#life').innerHTML=this.life;
        return this.life;
    }

    decLife(){
        if (this.life>0){
            this.life--;
        }
        document.querySelector('#life').innerHTML=this.life;
        return this.life;
    }

    resetLife(){
        this.life=this.base_life;
        document.querySelector('#life').innerHTML=this.life;
        return this.life;
    }

    getChain(){
        return this.chain;
    }

    saveGame(){
        localStorage.setItem("score", this.getScore());
        localStorage.setItem("life", this.getLife());
        localStorage.setItem("step", this.getStep());
        this.chain.export_status();
        this.chain.export_value();
    }

    restoreGame(){
        if ((localStorage.getItem("score") === null)||(localStorage.getItem("grid_val") === null)||(localStorage.getItem("grid_sta") === null)||(localStorage.getItem("life") === null)||(localStorage.getItem("step") === null)) {
            reset_global();
        }
        else {
            this.setLife(Number(localStorage.getItem("life")));
            this.setScore(Number(localStorage.getItem("score")));
            this.setStep(Number(localStorage.getItem("step")));
            this.chain.clear_grid();
            let buf_val = Number(localStorage.getItem("grid_val"));
            let buf_sta = Number(localStorage.getItem("grid_sta"));
            for (let i =0;i<buf_val.length;i++){
                let buf = this.chain.getElementChain(i);
                buf.setValue(Number(buf_val[i]));
                buf.setStatus(Number(buf_sta[i]));

            }        
        }
    }
}


