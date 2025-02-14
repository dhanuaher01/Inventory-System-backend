import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
  merchantId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model("Product", productSchema);
