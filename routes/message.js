import { Router } from "express";
import messages from "../msgData.js";

const messageRouter = Router();

messageRouter.get("/:messageid", (req, res, next) => {
  const id = req.params.messageid;

  const message = messages.find((msg) => {
    return msg.id === id;
  });

  console.log(message);

  res.render("messageDetail", {
    title: "Msg Detail",
    message,
  });
});

export default messageRouter;
