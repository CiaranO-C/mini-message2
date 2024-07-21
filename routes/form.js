import { Router } from "express";
import getForm from "../controllers/form.js";
import messages from "../msgData.js";
import { v4 as uuidv4 } from 'uuid';

const formRouter = Router();

formRouter.get("/", getForm);

formRouter.post("/", (req, res, next) => {
  const messageObj = {
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
    id: uuidv4(),
  };

  messages.push(messageObj);
  res.redirect("/");
});

export default formRouter;
