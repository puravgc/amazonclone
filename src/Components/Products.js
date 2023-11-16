"use client";
import React from "react";
import ProductBox from "./ProductBox";

const Products = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:-mt-52 mx-auto">

        {products?.slice(0,4).map(
          ({ id, title, price, description, category, image }, index) => (
            <ProductBox
              key={index}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
        <img src="https://links.papareact.com/dyz" className="md:col-span-full"/>
        <div className="md:col-span-2">
        {products?.slice(4,5).map(
          ({ id, title, price, description, category, image }, index) => (
            <ProductBox
              key={index}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
        </div>
        
        {products?.slice(7,products.length).map(
          ({ id, title, price, description, category, image }, index) => (
            <ProductBox
              key={index}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}

    </div>
  );
};

export default Products;
