import PollingModel from "./polling.schema.js";

// Add the question into the DB.
export const createQuestionRepo = async (title) => {
    return await PollingModel.create({ title });
};


// Find a question by its ID.
export const findQuestionById = async (id) => {
    return await PollingModel.findById(id);
}

// Add the option to particular question into DB.
export const createOptionRepo = async (option, id) => {
    return await PollingModel.updateOne(
        {_id: id},
        {$push: {
            options: {
                "text": option,
            }
        }}
    )
}

// Delete the particular question from DB.
export const deleteOptionRepo = async (id) => {
    return await PollingModel.deleteOne(
        {_id: id},
    )
}