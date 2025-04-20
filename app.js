import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js"

import cookieParser from "cookie-parser";

 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware);



app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscribe", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send(`hello World`);
})

app.listen(PORT, async () =>{
  console.log(`server running on http://localhost:${PORT}`);
  await connectDB();
})

export default app; 