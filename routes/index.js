import { Router } from "express";
import messages from '../msgData.js';

const indexRouter = Router();



indexRouter.get("/", (req, res, next) => {
  res.render("index", {
    title: "Home",
    messages,
  });
});


export default indexRouter;