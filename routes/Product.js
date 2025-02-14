import express from "express";
import Product from "../models/Product.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Product
router.post("/", authenticateUser, async (req, res) => {
  const { name, price, category, stock } = req.body;
  const product = new Product({ name, price, category, stock, merchantId: req.user.id });
  await product.save();
  res.json({ message: "Product added successfully" });
});

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update Product
router.put("/:id", authenticateUser, async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Product updated" });
});

// Delete Product
router.delete("/:id", authenticateUser, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
