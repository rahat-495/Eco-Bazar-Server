
import { TItem } from "./items.interface";
import { itemsModel } from "./items.model";

const getAllItemsFromDb = async () => {
    const result = await itemsModel.find() ;
    return result ;   
}

const createItemIntoDb = async (payload : TItem) => {
    const result = await itemsModel.create(payload) ;
    return result ;   
}

export const itemServices = {
    createItemIntoDb ,
    getAllItemsFromDb ,
}
