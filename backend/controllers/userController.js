import { ErrorHandler } from "../utils/errorHandler.js";
import { asyncError } from "../middleware/asyncError.js";
import User from "../models/userModel.js";

export const registerUser = asyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "Sample id",
            url: "Sample Url"
        }
    });

    res.status(201).json({
        success: true,
        user
    });
})