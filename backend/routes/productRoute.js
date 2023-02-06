import express from "express"
import { getProducts, createProduct, updateProduct, deleteProduct, getProductDetails } from "../controllers/productController.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id").get(getProductDetails).put(updateProduct).delete(deleteProduct);

export default router;