import { Router } from 'express';
import { getAllUsers, getUser } from '../controllers/user.controller.js';
import  authorize  from '../middleware/auth.middleware.js';



const userRouter = Router();

userRouter.get("/", getAllUsers)

userRouter.get("/:id",authorize, getUser)

userRouter.post("/", (req,res) => {
  res.send({
    title: "CREATE user data",
  })
})

userRouter.put("/:id", (req,res) => {
  res.send({
    title: "UPDATE user data",
  })
})


userRouter.delete("/:id", (req,res) => {
  res.send({
    title: "Delete a user",
  })
})

export default userRouter;
