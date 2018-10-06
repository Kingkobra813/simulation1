import React from "react";

function Product(props) {

    const { id, name, price, img } = props;

    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <img src={img}></img>
            <button onClick={() => props.deleted(id)}>Delete</button>
        </div>
    )
}
export default Product;