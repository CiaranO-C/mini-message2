import Router from "express-promise-router";
import getForm from "../controllers/form.js";
import { body, validationResult } from "express-validator";
import { sendMessage } from '../db/queries.js';

const formRouter = Router();

formRouter.get("/", getForm);

const validateMessage = [
  body("username")
    .trim()
    .isAlphanumeric()
    .withMessage("Username must only contain numbers and/or letters")
    .isLength({ min: 1, max: 12 })
    .withMessage("Username between 1 and 12 chars"),
];

formRouter.post("/", validateMessage, async (req, res, next) => {
  const { username, message } = req.body;

  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).render("form", {
      errors: err.array(),
      username,
      message,
    });
  }

  await sendMessage({username, message});

  res.redirect("/");
});

export default formRouter;
