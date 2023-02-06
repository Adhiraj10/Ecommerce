import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, {
        useUnifiedTopology: true, useNewUrlParser: true
    }).then((data) => {
        console.log(`Mongodb connected with server ${data.connection.host}`);
    });
}

export default connectDB;