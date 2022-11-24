import React from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";
import ItemList from "../ItemList";

const clothes = [
    {id: 1, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg", title: "Sweaters"},
    {id: 2, image: "", title: "Remeras"},
    {id: 3, image: "", title: "Jeans"},
]
export const ItemListContainer = () => {
    const onAdd = (quantity) => {
        console.log("Compraste ${quantity} unidades");
    }

    return ( 
        <>
    <Title greeting= "Talissa" />
    <ItemCount initial={1} stock={6} onAdd={onAdd} />
    <ItemList />
    </>
    );
}
export default ItemListContainer;