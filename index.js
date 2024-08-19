import express from "express";
import session from "express-session";
import { dbconnection } from "./config/db.js";
import MongoStore from "connect-mongo";
import userRouter from "./routes/user.js";
import itemRouter from "./routes/lost.js";
import cors from "cors";
import expressOasGenerator from "express-oas-generator"


// Create an app
const app = express();
// expressOasGenerator.handleRequests(app,{
//     alwaysServeDocs: true,
//     tags: ["User", "lost"],
//     mongooseModules: mongoose.moduleNames(),
// })

dbconnection();

// use middlewares
app.use(express.json());
app.use(cors({credentials:true, origin: '*'}));

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

// expressOasGenerator.handleRequests();
// app.use((req, res) => res.redirect('/api-docs/'));


// Listen for incoming request
app.listen(3000, () => {
    console.log('app is listening on port 3000');
});

