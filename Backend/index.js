import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRouter from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRouter from "./route/contact.route.js"
import connectToMongoDB from "./db/mongodb.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

connectToMongoDB();
 

const PORT = process.env.PORT || 4004;
const URI = process.env.MongoDBURI;



// defining routes
app.use("/api/books", bookRouter);
app.use("/user", userRoute);
app.use("/api/form",contactRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
                                    //must read it
   //backend
//run node ./index.js

//to checks the novels in database go to seed.js after add database run node seed.js
   //frontend
//npm run dev
