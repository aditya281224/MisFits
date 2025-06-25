import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latesProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    console.log(products)
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
    {/* Section Title */}
    <div className="text-center px-4">
      <Title text1="FRESH" text2="DROPS" />
      <p className="w-11/12 sm:w-3/4 mx-auto text-sm sm:text-base text-[#2b2b2b] mt-4 leading-relaxed font-light">
        Dive into this season’s newest statement pieces.
        <br />
        <span className="text-pink-500 font-semibold">Curated for originality, crafted for comfort.</span>
        <br />
        Discover styles that express the real you — bold, free, and unapologetically different.
      </p>
    </div>

      {/* Rendering list of products */}

      <div
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 px-3 sm:px-6
">
      {
        latesProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
      </div>
    </div>
  );
};

export default LatestCollection;
