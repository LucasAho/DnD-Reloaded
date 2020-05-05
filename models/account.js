const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 24
    },
    role: {
        type: String,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;