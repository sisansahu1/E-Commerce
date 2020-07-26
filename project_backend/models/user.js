const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const { get } = require("lodash");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    maxlength:32
  },
  lastname:{
    type: String,
    require: true,
    trim: true,
    maxlength:32
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  purchases: {
    type: Array,
    default: [],
  },
  encryptedPasswod: {
    type: String,
    require: true,
  },

  salt: String,

  role: {
    type: Number,
    default: 0,
  },
},{timestamps:true});

userSchema
  .virtual("password")
  .set(function (password) {
    (this._password = password),
      (this.salt = uuidv1()),
      (this.encryptedPasswod = this.hashPassword);
  })
  .get(function () {
    return this._password;
  });

userSchema.method = {
  authenticate: function (plainPassword) {
    return this.hashPassword(plainPassword) === this.encryptedPasswod;
  },
  hashPassword: function (password) {
    if (!password) return "Password cannot be empty";
    try {
      return (hash = crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex"));
    } catch (err) {
      return err;
    }
  },
};

module.export = mongoose.model("User", userSchema);
