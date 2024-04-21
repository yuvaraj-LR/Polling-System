import mongoose from "mongoose";

const pollingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    }, 
    options : [{
        text: {
            type: String,
        }, 
        votes: {
            type: Number,
            default: 0,
        }, 
        link_to_vote : {
            type: String
        }
    }]
});

const PollingModel = mongoose.model("Polling", pollingSchema);

export default PollingModel; 