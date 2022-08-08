export interface Iarticle{
    barCode:string | number;
    articleName:string;
    price:string|number;
    qte?:number|string;
    time?:string;
    isChanged?:boolean|false;
    dept?:string|null;
    group?:string|null;
}