const mongoose = require("mongoose");
// const bcrypt = require("bcrypt"); 
const Schema = mongoose.Schema;

const User = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "superadmin"],
  },
});
// User.pre('save', async function (next){
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
module.exports = mongoose.model("User", User);
