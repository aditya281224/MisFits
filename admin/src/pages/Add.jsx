import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if(response.data.success){
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false),
        setImage2(false),
        setImage3(false),
        setImage4(false),
        setPrice('')

      }
      else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <form
  onSubmit={onSubmitHandler}
  className="flex flex-col w-full items-start gap-3 text-[#2c2c2c] font-medium"
>
  <div>
    <p className="mb-2 text-[#6c5ce7] text-sm">Upload Image</p>
    <div className="flex gap-3">
      {[image1, image2, image3, image4].map((img, idx) => (
        <label htmlFor={`image${idx + 1}`} key={idx} className="relative group">
          <img
            className="w-20 h-20 object-cover rounded-lg border border-[#dcdcdc] shadow-sm group-hover:scale-105 transition-transform duration-200"
            src={!img ? assets.upload_area : URL.createObjectURL(img)}
            alt={`image${idx + 1}`}
          />
          <input
            type="file"
            id={`image${idx + 1}`}
            hidden
            accept="image/*"
            onChange={(e) =>
              [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])
            }
          />
        </label>
      ))}
    </div>
  </div>

  <div className="w-full">
    <p className="mb-2 text-[#6c5ce7] text-sm">Product Name</p>
    <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="w-full max-w-[500px] px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#a29bfe]"
      type="text"
      placeholder="Type Here"
      required
    />
  </div>

  <div className="w-full">
    <p className="mb-2 text-[#6c5ce7] text-sm">Product Description</p>
    <textarea
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      className="w-full max-w-[500px] px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#a29bfe]"
      placeholder="Write content here"
    />
  </div>

  <div className="flex flex-col sm:flex-row gap-4 w-full">
    <div>
      <p className="mb-2 text-[#6c5ce7] text-sm">Product Category</p>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#a29bfe]"
      >
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
      </select>
    </div>

    <div>
      <p className="mb-2 text-[#6c5ce7] text-sm">Product Subcategory</p>
      <select
        onChange={(e) => setSubCategory(e.target.value)}
        className="px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#a29bfe]"
      >
        <option value="Topwear">Topwear</option>
        <option value="Bottomwear">Bottomwear</option>
        <option value="Winterwear">Winterwear</option>
      </select>
    </div>

    <div>
      <p className="mb-2 text-[#6c5ce7] text-sm">Product Price</p>
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className="px-4 py-2 sm:w-[120px] rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#a29bfe]"
        type="number"
        placeholder="25"
      />
    </div>
  </div>

  <div>
    <p className="mb-2 text-[#6c5ce7] text-sm">Product Sizes</p>
    <div className="flex gap-3">
      {["S", "M", "L", "XL", "XXL"].map((size) => (
        <p
          key={size}
          onClick={() =>
            setSizes((prev) =>
              prev.includes(size)
                ? prev.filter((item) => item !== size)
                : [...prev, size]
            )
          }
          className={`${
            sizes.includes(size)
              ? "bg-pink-200 text-black"
              : "bg-slate-200 text-gray-600"
          } px-4 py-1 rounded-full cursor-pointer transition-colors duration-200`}
        >
          {size}
        </p>
      ))}
    </div>
  </div>

  <div className="flex gap-2 mt-2 items-center">
    <input
      onChange={() => setBestseller((prev) => !prev)}
      type="checkbox"
      id="bestseller"
      checked={bestseller}
      className="accent-[#a29bfe] w-4 h-4"
    />
    <label htmlFor="bestseller" className="cursor-pointer text-[#6c5ce7]">
      Add to bestseller
    </label>
  </div>

  <button
    type="submit"
    className="mt-4 w-32 py-3 px-4 rounded-md text-white bg-gradient-to-r from-[#74b9ff] via-[#a29bfe] to-[#fd79a8] hover:opacity-90 transition-all"
  >
    Add
  </button>
</form>

  );
};

export default Add;
