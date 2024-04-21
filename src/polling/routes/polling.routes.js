import express from "express"

import {createQuestion} from "../controller/polling.controller.js"

const router = express.Router();


// Creating a new question.
router.route("/createquestion").post(createQuestion);

export default router;