import React from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";

export const ItemListContainer = () => {
    const onAdd = (quantity) => {
        console.log("Compraste ${quantity} unidades");
    }

    return ( 
        <>
    <Title greeting= "Talissa" />
    <ItemCount initial={1} stock={6} onAdd={onAdd} />
    </>
    );
}
export default ItemListContainer;