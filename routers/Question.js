import express from "express";
import { sequelize } from "../models/model.js";
import Question from "../models/question.js";

const router = express.Router();

router.get("/AskQuestion", (req,res) => {
    res.render("AskQuestion.ejs", {user: req.session.user})
})


// Ingat Untuk Revisi
router.get("/AllQuestion", (req,res) => {
    res.render("AllQuestions.ejs", {user: req.session.user || null} )
})

router.get("/:question_id", (req,res) => {
    Question.findOne({ where: { id_question: req.params.question_id } })
    .then((results) => {     

        res.render("Question.ejs", {user: req.session.user || null, data: req.params.question_id })
    })

})

router.post("/", (req,res) => {
    Question.create( req.body )
    .then((results) => {
        res.json({ id_question: results.id_question })
    })
    .catch((err) => {
        res.send().status(502)
    })
})

router.get("/api/:question_id", (req,res) => {
    
    sequelize.query(`SELECT questions.id_question, users.display_name, questions.id_user, questions.title, questions.question, questions.tags, questions.createdAt FROM questions INNER JOIN users ON questions.id_user = users.id WHERE questions.id_question = ${req.params.question_id}`, { type: sequelize.QueryTypes.SELECT })
    .then( (results) => {

       
        if ( req.session.user ) {
            if ( results.length > 0 && req.session.user.id == results[0].id_user ) {
                res.json({ question: results[0], role: "Owner", msg:"Found" })
            }
    
            else if ( results.length > 0 && req.session.user.id != results[0].id_user ) {
                res.json({ question: results[0], role: "Member", msg:"Found" })
            }
            else {
                res.json({ msg: "Not Found" })
            }
        }

        else {
            if ( results.length > 0 ) {
                res.json({ question: results[0], role: "Guest", msg:"Found" })
            }
            else {
                res.json({ msg: "Not Found" })
            }
        }

    })
})

router.get("/AllQuestion/data", (req,res) => {
    sequelize.query(`SELECT users.display_name, questions.id_question, questions.title, questions.question, questions.tags, questions.createdAt FROM users INNER JOIN questions ON users.id = questions.id_user GROUP BY questions.id_question DESC`, { type: sequelize.QueryTypes.SELECT })
    .then( (results) => {
        res.json(results)
    })
})

export default router