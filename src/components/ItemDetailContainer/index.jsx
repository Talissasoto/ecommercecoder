import React from "react";
import ItemDetail from "../ItemDetail";

const clothes = 
    { id: 1, image: "https://www.latercera.com/resizer/sh_cCpOmr3sWCz3zsPOdPYSyKwE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg", title: "Sweaters"};

    export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(clothes);
            }, 3000);
    });

    getData.then(res => setData(res));
    }, [])
    
        return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;