import React from "react";

import classes from "./Products.module.css";

import ProductItem from "../ProductItem/ProductItem";

const PRODUCTS = [
    {
        id: "p1",
        price: 80,
        title: "First Book",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: "p2",
        price: 120,
        title: "Second Book",
        description: "Donec ultrices odio non malesuad",
    },
];

function Products() {
    return (
        <section className={classes.products}>
            <h2>Buy Your Favorite Books</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Products;
