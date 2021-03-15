var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema (
    {
        name: {type: String, required: true, minlength: 3, maxlength: 100}
    }
);

//Virtual for genreschemas url

GenreSchema
.virtual("url")
.get(function() {
    return '/catalog/genre/' + this._id;
});

module.export = mongoose.model("Genre", GenreSchema);