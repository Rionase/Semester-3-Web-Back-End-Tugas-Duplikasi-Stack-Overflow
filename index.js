import express from "express";
import session from 'express-session';

import Auth from "./controllers/Auth.js";

import SignUpRoutes from "./routers/SignUp.js";
import LogInRoutes from "./routers/LogIn.js";
import QuestionRoutes from "./routers/Question.js";
import VotesRoutes from "./routers/Votes.js";
import AnswerRoutes from "./routers/Answer.js"

import Answer from "./models/answer.js";




const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(session({
    secret: 'Stackoverflow', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { maxAge: 100 * 60 * 60 * 1000 } // Ingat Diubah jadi 1 jam
}));



app.get("/create", (req,res) => {
    Answer.sync()
    res.send("ok")
})




app.get("/", Auth, (req,res) => {
    res.render("Home.ejs")
})

// SESSION DIBUAT SAAT SIGNUP
app.use("/SignUp", Auth, SignUpRoutes )

// SESSION DIBUAT SAAT LOGIN
app.use("/LogIn", Auth, LogInRoutes )

// DESTROY SESSION SAAT LOGOUT
app.get("/LogOut", (req,res) => {
    req.session.destroy()
    res.redirect("/LogIn")
})

app.get("/About", Auth, (req,res) => {
    res.render("About.ejs", {user: req.session.user})
})

app.use("/Question", Auth, QuestionRoutes )

// API untuk menghandle vote up, vote down, check user vote, dan count all user vote
app.use("/Votes", VotesRoutes )


app.use("/Answer", AnswerRoutes )



















app.get("/forbidden", (req,res) => {
    res.render("Forbidden.ejs", { user: req.session.user || null })
})

app.get("*", (req,res) => {
    res.redirect("/forbidden")
})


app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`)
})