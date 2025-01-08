import express from "express";
import path from "path";
import homeRoute from "./routes/homeRoute.mjs";
import aboutRoute from "./routes/aboutRoute.mjs";
import contactRoute from "./routes/contactRoute.mjs";
import projectsRoute from "./routes/projectsRoute.mjs";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), "public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/projects", projectsRoute);

app.use((req, res) => {
  res.status(404).send("Invalid Request");
});

app.listen(PORT, () => {
  console.log(`server listening at port : ${PORT}`);
});
