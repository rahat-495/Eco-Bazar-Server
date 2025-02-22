
import AppError from "../../errors/AppErrors";
import { TItem } from "./items.interface";
import { itemsModel } from "./items.model";

const getAllItemsFromDb = async () => {
    const result = await itemsModel.find() ;
    return result ;   
}

const getSingleItemFromDb = async (id : string) => {
    const result = await itemsModel.findById(id) ;
    return result ;   
}

const createItemIntoDb = async (payload : TItem) => {
    const result = await itemsModel.create(payload) ;
    return result ;   
}

const updateItemFromDb = async (id : string , payload : Partial<TItem>) => {
    const isItemAxist = await itemsModel.findById(id) ;
    if(!isItemAxist){
        throw new AppError(404 , "Item not found !")
    }
    const result = await itemsModel.findByIdAndUpdate(id , payload) ;
    return result ;   
}

const deleteItemIntoDb = async (id : string) => {
    const isItemAxist = await itemsModel.findById(id) ;
    if(!isItemAxist){
        throw new AppError(404 , "Item not found !")
    }
    const result = await itemsModel.findByIdAndDelete(id) ;
    return result ;   
}

export const itemServices = {
    createItemIntoDb ,
    updateItemFromDb ,
    deleteItemIntoDb ,
    getAllItemsFromDb ,
    getSingleItemFromDb ,
}
