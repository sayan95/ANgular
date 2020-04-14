export class Ingridient{
    // states
    private name:string;
    private ammount:number;

    // constructor
    constructor(name:string, ammount:number){
        this.name=name;
        this.ammount=ammount;
    }


    // getters
    public getIngridientName():string{
        return this.name;
    }
    public getIngridientAmmount():number{
        return this.ammount;
    }
}