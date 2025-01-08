import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} - ${res.statusCode}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/status", (req, res) => {
  res.sendStatus();
});

app.use((req, res) => {
  res.status(404).send("Invalid Request");
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
