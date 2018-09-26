import Dairy from './Dairy.model';

export default class DairyStore {
    dairyList: Dairy[] = [];

    constructor(){}

    getDairy(){           
        return this.dairyList;
    }
    addItem(itemName: string){
        this.dairyList.push(new Dairy(itemName))
    }
    deleteItem(index: number){
        // const index = this.dairyList.findIndex(dairy => dairy.name == itemName);
        this.dairyList.splice(index, 1);
    }

}