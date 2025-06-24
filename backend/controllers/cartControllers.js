import userModel from "../models/userModel"


// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, sizes } = req.body; 

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    
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
      message: "Cart updated successfully",
    });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update cart",
    });
  }
};





const updateCart = async (req,res) =>{

  try{
    const {userId,itemId,size,quantity}=req.body;

  }
  catch(error){
    
  }

}


// get user cart data
const getUserCart = async (req,res) =>{

}


export {addToCart,updateCart,getUserCart}