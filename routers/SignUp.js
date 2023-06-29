import express from "express";
import crypto from "crypto";
import User from "../models/user.js";


const router = express.Router();

router.get("/", (req,res) => {
    res.render("SignUp.ejs")
})

router.post("/" , (req,res) => {
    User.create({
        email: req.body.email,
        display_name: req.body.display_name,
        password: crypto.createHash('md5').update( req.body.password ).digest('hex')
    })
    .then( (results) => {

        // SESSION DIBUAT SAAT USER LOG IN
        req.session.user = { id: results.id, email: results.email, display_name: results.display_name }
        res.send().status(200)
    })
    .catch( (err) => {
        res.send().status(502)
    })
})


router.get("/api/checkEmail/:email", (req,res) => {
    User.findOne({ where: { email: req.params.email } })
    .then((results) => {
        if ( results ) {
            res.json({ data: "Terdaftar" })
        }
        else {
            res.json({ data: "Tidak Terdaftar"})
        }
    })
})

export default router;