var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        trim: true,
        required: "URL is Required"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;