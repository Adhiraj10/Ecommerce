import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import productRouter from "./routes/productRoute.js";
import { error } from "./middleware/error.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use('/api/v1', productRouter);

//Error handler middleware
app.use(error);



const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

//Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting the server down due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1);
    });
});
