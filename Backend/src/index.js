import dotenv from "dotenv";
import connectDB from "./config/database";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        app.listen(process.env.PORT || 9000, () => {
            console.log(`Server is running on port : ${proccess.env.PORT}`)
        });
    } catch (error) {
        console.log("MongoDB Connection failed!!", error)
    }
}

startServer();