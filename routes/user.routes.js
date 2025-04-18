import { Router } from 'express';

const userRouter = Router();

userRouter.get("/", (req,res) => {
  res.send({
    title: "GETs all user",
  })
})

userRouter.get("/:id", (req,res) => {
  res.send({
    title: "GETs single user data",
  })
})

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
