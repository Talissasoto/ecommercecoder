import Item from "../Item";
import React from "react";


const ItemList = ({data = []}) => {
   
    return ( 
        data.map(clothes => <Item key={clothes.id} info={clothes} />)
    
    );
}
export default ItemList;