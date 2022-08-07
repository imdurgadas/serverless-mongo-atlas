const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "Please set a password"],
    minlength: 6,
    select: false,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
