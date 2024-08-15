import express from "express";
import session from "express-session";
import { dbconnection } from "./config/db.js";
import MongoStore from "connect-mongo";
import userRouter from "./routes/user.js";
import itemRouter from "./routes/lost.js";


// Create an app
const app = express();

dbconnection();

// use middlewares
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
    store: MongoStore.create({
        mongoUrl:process.env.MONGO_URL
    })
}));

// use routes
app.use(userRouter);
app.use(itemRouter);


// Listen for incoming request
app.listen(3000, () => {
    console.log('app is listening on port 3000');
});

