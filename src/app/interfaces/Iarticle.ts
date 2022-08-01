export interface Iarticle{
    barCode:string | number;
    articleName:string;
    price:string|number;
    qte?:number|string;
    time?:string;
    isPrinted?:boolean|false
}