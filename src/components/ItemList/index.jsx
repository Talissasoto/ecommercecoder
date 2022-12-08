import Item from "../ItemList"
import React from "react";

const ItemList = ({data = []}) => {
   
    return ( 
        data.map(clothes => <item key={clothes.id} info={clothes} />)
    
    );
}
export default ItemList;