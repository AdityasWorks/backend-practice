import Subscription from "../models/subscription.model.js";
export const createSubscription = async (req,res,next) => {

  try {

    const subscripton = await Subscription.create({
      ...req.body,
      user: req.user._id,
       
    });
    

  } catch (error) {
    next(error);
  }

}