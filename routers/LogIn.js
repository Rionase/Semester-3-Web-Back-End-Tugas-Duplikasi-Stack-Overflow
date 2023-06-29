import express from "express";
import crypto from "crypto";
import User from "../models/user.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.render("LogIn.ejs", { status: req.query.status || null })
})

router.post("/", (req,res) => {
    User.findOne({ where: { 
        email: req.body.email, 
        password: crypto.createHash('md5').update( req.body.password ).digest('hex')
    } })
    .then( (results) => {
        if ( results ) {

            // SESSION DIBUAT SAAT USER LOG IN
            req.session.user = { id: results.id, email: results.email, display_name: results.display_name }
            res.json({ data: "Terdaftar" })
        }
        else {
            res.json({ data: "Tidak Terdaftar" })
        }
    })
    .catch( err => {
        res.send().status(502)
    })
})

export default router;