const { Schema } = require("mongoose");
mongoose.connect(
  "mongodb+srv://dhruvrajput222:P62DtAg1FumuWFFG@cluster0.0c5ojry.mongodb.net/"
);
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseschema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  couseId: ObjectId,
});

const userModel = mongoos.model("user", userSChema);
const adminModel = mongoos.model("admin", userSChema);
const courseModel = mongoos.model("course", userSChema);
const purchaseModel = mongoos.model("purchase", userSChema);

module.export = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
