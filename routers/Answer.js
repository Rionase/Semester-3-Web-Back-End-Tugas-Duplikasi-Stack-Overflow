import express from "express";
import Answer from "../models/answer.js";
import { sequelize } from "../models/model.js";

const router = express.Router();

router.post("/", (req,res) => {
    Answer.create({
        id_question: req.body.id_question,
        answer: req.body.answer,
        id_user: req.session.user.id 
    })
    .then((results) => {
        res.json({ data: "okay" })
    })
})

router.get("/:question_id", (req,res) => {
    sequelize.query(`SELECT users.display_name, answers.answer, answers.createdAt FROM users INNER JOIN answers ON users.id = answers.id_user WHERE answers.id_question = ${req.params.question_id}`, { type: sequelize.QueryTypes.SELECT })
    .then( (results) => {
        res.json(results)
    })
})

export default router