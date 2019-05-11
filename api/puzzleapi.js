import express from "express";
import db from "../db/database";
import Puzzle from "../model/puzzle";

const router = express.Router();

//handles url http://localhost:3029/puzzles
router.get("/", (req, res, next) => {
    console.log("HEllo");

    db.query(Puzzle.getAllPuzzles(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Puzzles listed.",
                puzzles:data
            });
        }
        console.log(err);
    });

});
module.exports = router;