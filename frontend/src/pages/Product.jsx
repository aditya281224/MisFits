import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState({});

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const qtyHandler = (item) => {
    setQty((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  const decHandler = (sizeKey) => {
    setQty((prev) => ({
      ...prev,
      [sizeKey]: Math.max(0, (prev[sizeKey] || 0) - 1),
    }));
  };

  useEffect(() => {
    fetchProductData();
    setQty({});
  }, [productId, products]);

  useEffect(() => {
    const sizesArray = Object.entries(qty).flatMap(([key, count]) =>
      Array(count).fill(key)
    );
    setSize(sizesArray.join(","));
  }, [qty]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-gradient-to-r from-blue-100 to-yellow-50">
      {/* Product DaTA */}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product img */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(12)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-1 border rounded w-16 py-2
    ${
      qty[item] > 0
        ? "border-orange-500 bg-orange-100 font-semibold"
        : "border-gray-300 bg-gray-100"
    }`}
                >
                  {/* + Button */}
                  <button
                    className="text-xl border select-none cursor-pointer w-6 h-6 leading-4 flex items-center justify-center rounded-sm bg-white"
                    onClick={() => qtyHandler(item)}
                  >
                    +
                  </button>

                  {/* Size Label */}
                  <span className="text-sm text-center">
                    {item} ({qty[item] || 0})
                  </span>

                  {/* - Button (keeps space reserved using visibility) */}
                  <button
                    className={`text-xl border select-none cursor-pointer w-6 h-6 leading-4 flex items-center justify-center rounded-sm bg-white ${
                      qty[item] > 0 ? "visible" : "invisible"
                    }`}
                    onClick={() => decHandler(item)}
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const sizesArray = Object.entries(qty)
                .flatMap(([key, count]) => Array(count).fill(key))
                .filter((size) => size); 

              if (sizesArray.length === 0) {
                toast.error("Select Product Size");
                return;
              }

              addToCart(productData._id, sizesArray)
              
              setQty({});
            }}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 "></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return and exchange policy within 7</p>
          </div>
        </div>
      </div>

      {/* Description and Review */}
      {/* <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div> */}

      {/* Diplsay related Products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
