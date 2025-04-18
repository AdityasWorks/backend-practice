import { subscribe } from 'diagnostics_channel';
import { Router } from 'express';

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


subscriptionRouter.post("/",(req, res) => {
  res.send({
    title: "CREATE subscription",}
  )
})


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


subscriptionRouter.get("/user/:id",(req, res) => {
  res.send({
    title: "GET all user subscription subscription",}
  )
})


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