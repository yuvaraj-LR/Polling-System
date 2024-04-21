import { ErrorHandler } from "../../../error-handler/errorHandler.js";

import {
    findQuestionById,
    createQuestionRepo,
    createOptionRepo,
    deleteOptionRepo
} from "../model/polling.repository.js"

export const getQuestion = async (req, res, next) => {
    try {
        const {id} = req.params;
        const questionPresent = await findQuestionById(id);
        console.log(questionPresent, "questionPresenttt...");

        if(!questionPresent) {
            return next(new ErrorHandler(404, "Question not found."))
        }

        return res.status(200).json({success: true, question: questionPresent})
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const createQuestion = async (req, res, next) => {
    try {
        const {title} = req.body;

        const questionCreated = await createQuestionRepo(title);

        return res.status(200).json({success: true, msg: "Question created successfully.", data: questionCreated});
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const createOption = async (req, res, next) => {
    try {
        const {id} = req.params;
        const questionPresent = await findQuestionById(id);
        console.log(questionPresent, "questionPresenttt...");

        if(!questionPresent) {
            return next(new ErrorHandler(404, "Question not found."))
        }

        const {option} = req.body;
        await createOptionRepo(option, id);

        // Fetch the question again after creating the option
        const updatedQuestion = await findQuestionById(id);

        let link = "http://localhost:8080/options";
        updatedQuestion.options.forEach(option => {
            console.log(`${link}/${option._id}/add_vote`);
            option.link_to_vote = `${link}/${option.id}/add_vote`
        });

        let optionAddedData = await updatedQuestion.save();
        console.log(optionAddedData, "dataa...");
        return res.status(200).json({success: true, msg: "Option created successfully.", data: optionAddedData});        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const addVote = async (req, res, next) => {
    try {
        const {id} = req.params;

        const {questionId} = req.body;
        const questionPresent = await findQuestionById(questionId);

        if(!questionPresent) {
            return next(new ErrorHandler(404, "Question not found."))
        }

        const optionIndex = questionPresent.options.findIndex(o => o._id.toString() === id );

        if(!optionIndex && optionIndex != 0) {
            return next(new ErrorHandler(404, "Option not found."))
        }

        questionPresent.options[optionIndex].votes = questionPresent.options[optionIndex].votes + 1;

        let updatedVote = await questionPresent.save();

        return res.status(200).json({success: true, msg: "Vote added successfully.", data: updatedVote.options[optionIndex]});  
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const deleteQuestion = async (req, res, next) => {
    try {
        const {id} = req.params;

        const questionPresent = await findQuestionById(id);

        if(!questionPresent) {
            return next(new ErrorHandler(404, "Question not found."))
        };

        let canDelete = true;

        questionPresent.options.forEach(o => {
            if(o.votes > 0) {
                canDelete = false;
            }
        });

        if(canDelete) {
            await deleteOptionRepo(id);
            return res.status(200).json({success: true, msg: "Successfully deleted the question."})
        } else {
            return next(new ErrorHandler(400, "Already have vote by someone."));
        }
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const deleteOption = async (req, res, next) => {
    try {
        const {id} = req.params;

        const questionPresent = await findQuestionById(id);

        if(!questionPresent) {
            return next(new ErrorHandler(404, "Question not found."))
        };

        const {optionId} = req.body;

        const optionIndex = questionPresent.options.findIndex(o => o._id.toString() === optionId);
        
        if(!optionIndex && optionIndex != 0) {
            return next(new ErrorHandler(404, "Option not found."))
        }

        questionPresent.options.splice(1, optionIndex);
        await questionPresent.save();

        return res.status(200).json({success: true, msg: "Successfully deleted the option."});
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}