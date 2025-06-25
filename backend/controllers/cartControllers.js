import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, sizes } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = (await userData.cartData) || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    sizes.forEach((size) => {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    });

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "Added to Cart successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Failed to add to cart",
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (!cartData[itemId]) {
      return res.json({
        success: false,
        message: "Item not found in cart",
      });
    }

    if (quantity <= 0) {
     
      delete cartData[itemId][size];

      
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } 
    else{
      cartData[itemId][size] = quantity;
    }


    
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Failed to update cart",
    });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addToCart, updateCart, getUserCart };
