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

    const token = user.getJWTtoken();

    res.status(201).json({
        success: true,
        token
    });
})



export const loginUser = asyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new ErrorHandler("Please enter both email and password", 400));

    const user = await User.findOne({ email }).select("+password");  //select method used because in our model we have select false so that find method doesn't return password by default
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const passwordMatched = user.comparePassword(password);

    if (!passwordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const token = user.getJWTtoken();

    res.status(200).json({
        success: true,
        token
    });
})