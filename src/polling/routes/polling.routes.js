import express from "express"

import {
    getQuestion,
    createQuestion, 
    createOption,
    addVote, 
    deleteQuestion, 
    deleteOption
} from "../controller/polling.controller.js"

const router = express.Router();    

// GET API ENDPOINTS.
// Get a single question.
router.route("/questions/:id").get(getQuestion);

// POST API ENDPOINTS.
// Creating a new question.
router.route("/questions/create").post(createQuestion);
// Creating a new option for that question.
router.route("/questions/:id/options/create").post(createOption);

// PUT API ENDPOINTS.
// Add voting to particular option.
router.route("/options/:id/add_vote").get(addVote);

// DELETE API ENDPOINTS.
// Delete a question.
router.route("/questions/:id/delete").delete(deleteQuestion);
// Delete a option.
router.route("/options/:id/delete").delete(deleteOption);

export default router;