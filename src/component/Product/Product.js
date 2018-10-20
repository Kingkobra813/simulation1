import React from "react";
import { Link } from "react-router-dom";
//import "./Product.css";

function Product(props) {
  const { id, name, price, img } = props;

  return (
    <div className="container">
      <p>{name}</p>
      <p>${price}</p>
      <img src={img} />
      <button onClick={() => props.deleted(id)}>Delete</button>

      <Link to={"/edit/" + id}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
export default Product;
