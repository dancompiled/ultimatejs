import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.json({ message: "Server running!" });
});

app.get("/crash", () => {
  throw new Error("Something went wrong!");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
