import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log("Inside best seller");
    const bestProduct = products.filter((item) => item.bestseller);
    console.log(bestProduct);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10 ">
      <div className="text-center px-4">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-11/12 sm:w-3/4 mx-auto text-sm sm:text-base text-[#2b2b2b] mt-4 leading-relaxed font-light">
          Discover our bestselling styles made for the misfits — bold,
          unapologetic fashion that dares to stand out.
        </p>
      </div>

      <div
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 px-3 sm:px-6
"
      >
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
