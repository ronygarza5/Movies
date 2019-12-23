const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Must have a name to leave comment."],
        minlength: [2, "Has to be at least 2 characters long."],
    },
    stars: {
        type: Number, 
        required: [true, "How good or bad was the movie?"]
    },
    comment: {
        type: String, 
        required: [true, "Must have a comment to leave."],
        minlength: [4,"Comment must have at least 4 characters."],
    }
}, {timestamps: true})


const MovieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "A movie must have a title."],
        minlength: [3, "Title can not be shorter than 3 characters."]
    },
    reviews: [ReviewSchema]
}, {timestamps: true})


mongoose.model('Movie', MovieSchema);
mongoose.model("Review", ReviewSchema);