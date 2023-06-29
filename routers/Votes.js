import express from "express";
import Question_Vote from "../models/question_vote.js";

const router = express.Router();

router.get("/api/Question/:id_question", (req,res) => {
    if ( req.session.user ) {
        Question_Vote.findOne({ where: { id_question: req.params.id_question, id_user: req.session.user.id  } })
        .then((results) => {
            if ( results != null ) {
                res.json({ status: results.status })
            }
            else {
                res.json({ status: "None" })
            }
        })
        .catch(err => {
            res.json({ status: "None" })
        })
    }
    else {
        res.json({ status: "None" })
    }
})

router.post("/api/Question", (req,res) => {
    Question_Vote.findOne({ where: { id_question: req.body.id_question, id_user: req.session.user.id } })
    .then((results) => {
        // Apabila ditemukan maka akan update
        if ( results != null ) {
            if ( req.body.status == results.status ) {
                req.body.status = "None"
            }
            Question_Vote.update({ 
                id_question: req.body.id_question, 
                id_user: req.session.user.id,
                status: req.body.status
            }, 
            { where: { id_question: req.body.id_question, id_user: req.session.user.id } })
            .then( (results) => {
                res.json({ status: req.body.status })
            })
        }
        // Apabila tidak ditemukan maka akan create
        else {
            Question_Vote.create({ 
                id_question: req.body.id_question, 
                id_user: req.session.user.id,
                status: req.body.status
            })
            .then( (results) => {
                res.json({ status: results.status })
            })
        }
    })
    .catch(err => {
        console.log(err)
    })
})

router.get("/api/CountVotes/:id_question", (req,res) => {
    Question_Vote.findAll({where : {id_question: req.params.id_question}})
    .then( (results) =>{
        let VotesUp = results.reduce((n, {status}) => n + (status === "Votes Up"), 0);
        let VotesDown = results.reduce((n, {status}) => n + (status === "Votes Down"), 0);
        let Count = VotesUp - VotesDown
        res.json({ count: Count })
    })
})


export default router;