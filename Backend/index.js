import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"




const app= express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT =process.env.PORT || 4000;
const URL = process.env.MongoDBURL;
//connect to mongodb
try{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB");

} catch (error){
    console.log("Error :",error);

}

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
