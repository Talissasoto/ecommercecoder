import React, {useState, useEffect}  from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";


const clothes = [
    { id: 1, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg" , category: 'shop', title: "Jeans"},
    { id: 2, image: "https://img.freepik.com/foto-gratis/cerca-articulos-tejidos-cuidadosamente-doblados-color-pastel_169016-7137.jpg?w=996&t=st=1671053898~exp=1671054498~hmac=039c5df6a47347a0678013591239b5b824af58db6534b1331f0c99c2d8f7010d", category: 'sale', title: "Sweaters"},
    { id: 3, image: "https://img.freepik.com/foto-gratis/cerca-articulos-tejidos-cuidadosamente-doblados-color-pastel_169016-7137.jpg?w=996&t=st=1671053898~exp=1671054498~hmac=039c5df6a47347a0678013591239b5b824af58db6534b1331f0c99c2d8f7010d", category: 'shop', title: "Remeras y blusas"},
];

export const ItemListContainer = ({texto}) => {

const [data, setData] = useState([]);

const {categoriaId} = useParams();

useEffect(() => {

    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(clothes);
    }, 1000);
    });
    
    if (categoriaId) {
    getData.then(res => setData(res.filter(clothes => clothes.category === categoriaId)));
 } else {
    getData.then(res => setData(res));
 }
 
}, [categoriaId])
    const onAdd = (quantity) => {
        console.log("Compraste ${quantity} unidades");
    }

    return ( 
        <>
    <Title greeting= "Minca" />
    <ItemCount initial={1} stock={6} onAdd={onAdd} />
    <ItemList data={data} />
    </>
    );
}
export default ItemListContainer;