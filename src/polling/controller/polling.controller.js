import { ErrorHandler } from "../../../error-handler/errorHandler.js";

export const getQuestion = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const createQuestion = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const createOption = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const addVote = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const deleteQuestion = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}

export const deleteOption = async (req, res, next) => {
    console.log("I am calledd...");
    try {
        
    } catch (error) {
        next(new ErrorHandler(400, error));
    }
}