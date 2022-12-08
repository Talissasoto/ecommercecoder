import React, {useState, useEffect}  from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
const clothes = [
    { id: 1, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg", title: "Sweaters"},
    { id: 2, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg", title: "Remeras"},
    { id: 3, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg", title: "Jeans"},
];

export const ItemListContainer = () => {
const [data, setData] = useState([]);
const {categoriaId} = useParams();
useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(clothes);
    }, 3000);
    });
    if (categoriaId) {
    getData.then(res => res.filter(clothes.category === categoriaId))
 } else {
    getData.then(res => setData(res));
 }
 
}, [])
    const onAdd = (quantity) => {
        console.log("Compraste ${quantity} unidades");
    }

    return ( 
        <>
    <Title greeting= "Talissa" />
    <ItemCount initial={1} stock={6} onAdd={onAdd} />
    <ItemList data={data} />
    </>
    );
}
export default ItemListContainer;