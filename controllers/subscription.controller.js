import Subscription from "../models/subscription.model.js";


export const createSubscription = async (req,res,next) => {

  try {

    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
       
    });
    
    res.status(201).json({
      status: "success",
      data: {
        subscription,
      },
    });

  } catch (error) {
    next(error);
  }

}


export const getUserSubscription = async (req,res,next) => {

  try{

    if(req.user.id !== req.params.id){
      
      const error = new Error("You are not authorized to view this subscription", 403);
      error.status = 401;
      throw error;
    }

    const subscription = await Subscription.find({user: req.params.id});

    res.status(200).json({
      status: "success",
      data: {
        subscription,
      },
    });


 
  } catch(e){
    next(e);
  }

}