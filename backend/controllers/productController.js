import Product from "../models/productModel.js"
import { ErrorHandler } from "../utils/errorHandler.js";
import { asyncError } from "../middleware/asyncError.js";
import { ApiFeatures } from "../utils/apiFeatures.js";

//Create Products [Admin route only]
export const createProduct = asyncError(async (req, res, next) => {
    let product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
});

//Get All Products
export const getProducts = asyncError(async (req, res, next) => {
    let apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
    let product = await apiFeature.query;
    res.status(200).json({ success: true, product });
});

//Get Product Details
export const getProductDetails = asyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }
    res.status(200).json({ success: true, product })
});

//Update Product [Admin route only]
export const updateProduct = asyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not Found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });
    res.status(200).json({ success: true, product })
});

//Delete a Product
export const deleteProduct = asyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    await product.remove();
    res.status(200).json({ success: true, message: "Product deleted successfully" });
});


