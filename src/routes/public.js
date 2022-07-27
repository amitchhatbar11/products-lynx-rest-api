import express from "express";
import { getProduct, viewedProducts } from "../controllers/product.controller";

const router = express.Router();

// Public routes

router.get("/", (req, res) => res.send("test!"));

router.get("/product", getProduct);

router.get("/products", viewedProducts);

module.exports = router;
