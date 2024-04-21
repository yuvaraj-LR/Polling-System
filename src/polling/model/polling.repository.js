import PollingModel from "./polling.schema.js";

export const createQuestionRepo = async (title) => {
    return await PollingModel.create({ title });
};

export const findQuestionById = async (id) => {
    return await PollingModel.findById(id);
}

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

export const deleteOptionRepo = async (id) => {
    return await PollingModel.deleteOne(
        {_id: id},
    )
}