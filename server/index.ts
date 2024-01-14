import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => res.send({ message: "HELLO FROM SERVER" }));

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
