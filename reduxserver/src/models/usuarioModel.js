const {Schema, mongoose} = require("../database/database");
var userSchema = new Schema({
    nombre: { type: String, required: true },
    dni: { type: String, required: true },
    curso: { type: String, required: true}
})

var User = mongoose.model("User", userSchema)

module.exports = User