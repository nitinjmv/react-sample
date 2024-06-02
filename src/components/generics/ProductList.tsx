import { MouseEvent } from "react";
import { Card } from "react-bootstrap";
import { IProduct } from "../types/IProduct";

export const ProductList = (props: { product: IProduct }) => {
  function handleClick(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <Card.Text>
      {props.product.id}
      {props.product.title}
      {props.product.price}
      <button onClick={(e) => handleClick}>Add</button>
    </Card.Text>
  );
};
