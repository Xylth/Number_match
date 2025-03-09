class element{
    constructor(row,col,status,value){
        this.row=row;
        this.col=col;
        this.chainId=col+(row*9);
        this.status=status;
        this.value=value;
    }

    getRow(){
        return this.row;
    }

    getCol(){
        return this.col;
    }

    getStatus(){
        return this.status;
    }

    getValue(){
        return this.value;
    }

    getChainId(){
        return this.chainId;
    }

    setValue(val){
        this.value=val;
    }

    setStatus(val){
        this.status=val;
    }

    setChainId(val){
        this.chainId=val;
        this.row=Math.floor(val / 9);
        this.col= val%9;
    }
}