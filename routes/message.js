import Router from "express-promise-router";
import { findMessage } from "../db/queries.js";

const messageRouter = Router();

messageRouter.get("/:messageid", async (req, res, next) => {
  const id = req.params.messageid;
  const message = await findMessage(id);

  res.render("messageDetail", {
    title: "Msg Detail",
    message,
  });
});

export default messageRouter;
