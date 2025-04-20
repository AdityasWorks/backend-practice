import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';
import { getUserSubscription } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();


subscriptionRouter.get("/",(req, res) => {
  res.send({
    title: "GETs all subscription",}
  )
})


subscriptionRouter.get("/:id",(req, res) => {
  res.send({
    title: "GETs 1 user subscription",}
  )
})


subscriptionRouter.post("/",authorize,createSubscription)


subscriptionRouter.put("/:id",(req, res) => {
  res.send({
    title: "UPDATE 1 subscription",}
  )
})


subscriptionRouter.delete("/:id",(req, res) => {
  res.send({
    title: "DELETE 1 subscription",}
  )
})


subscriptionRouter.get("/user/:id",authorize,getUserSubscription);


subscriptionRouter.put("/:id/cancel",(req, res) => {
  res.send({
    title: "cancle 1 subscription",}
  )
})


subscriptionRouter.get("/upcoming-renewals",(req, res) => {
  res.send({
    title: "GET upcoming-renewals",}
  )
})




export default subscriptionRouter;