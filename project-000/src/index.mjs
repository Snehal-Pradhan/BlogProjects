import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HomeRoute");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/projects", (req, res) => {
  res.send("Projects");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(PORT, () => {
  console.log(`server listening at port : ${PORT}`);
});
