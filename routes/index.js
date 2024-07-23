import Router from "express-promise-router";
import { getAllMessages } from "../db/queries.js";

const indexRouter = Router();


indexRouter.get("/", async (req, res, next) => {
  const messages = await getAllMessages();

  res.render("index", {
    title: "Home",
    messages,
  });
});

export default indexRouter;
