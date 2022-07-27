import express from "express";

import publicRoutes from "./public";

const app = express();

app.use("/", publicRoutes);

module.exports = app;
