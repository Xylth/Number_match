class game{

    constructor(){
        this.initGameData();
        this.chain = new grid();
        this.chain.fillGrid();
        this.base_life=1;

    }

    initGameData(){
        this.resetScore();
        this.resetHighScore();
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
}

