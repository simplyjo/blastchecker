
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkerSchema = new Schema({
  wallets:String,

});

const UserWl = mongoose.model("userwl", checkerSchema);

module.exports = UserWl;