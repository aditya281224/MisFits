import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {

  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType]=useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };


  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts=()=>{
    let filterProductsCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price-b.price)))
      break;
      case 'hight-low':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price-a.price)))
      break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])
  
  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filters */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          ></img>
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              ></input>
              Men
            </p>

            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              ></input>
              Women
            </p>

            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              ></input>
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              ></input>
              Topwear
            </p>

            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              ></input>
              Bottomwear
            </p>

            <p className="flex gap-2">
              <input
                className="w-3
              "
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              ></input>
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort By: Relavent</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* List */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
