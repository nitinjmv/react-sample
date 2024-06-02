import React from "react";
import { ProductList } from "./ProductList";
import { IProduct } from "../types/IProduct";
import { Card } from "react-bootstrap";

const products: IProduct[] = [
  { id: 1, price: 2322, title: "laptop" },
  { id: 2, price: 56543, title: "phone" },
  { id: 3, price: 211, title: "desk" },
];

export const Product = () => {
  return (
    <Card>
      <Card.Body>
        {products.map((p) => (
          <ProductList product={p} key={p.id} />
        ))}
      </Card.Body>
    </Card>
  );
};
