let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "You need a title for your task"],
        minlength: [4, "Title length must be above than 4"]
    },
    desc: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        default: ""
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

// make the model
mongoose.model('Task', taskSchema);