import express from "express";
import path from "path";
import indexRouter from "./routes/index.js";
import formRouter from "./routes/form.js";
import messageRouter from './routes/message.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use('/messages', messageRouter)

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).send(`Error: ${err}`);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
