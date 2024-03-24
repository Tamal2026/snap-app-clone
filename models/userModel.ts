import mongoose, { Model } from "mongoose";
export interface Iuser {
  userName: string;
  fullName: string;
  email: string;
  avatar?: string;
}

export interface IuserDocument extends Iuser, Document{
    createdAt: Date;
    updatedAt: Date;
}
const userSchema = new mongoose.Schema<IuserDocument>({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: "",
  },
});

const User:Model<IuserDocument> = mongoose.models?.User || mongoose.model("user", userSchema);
export default User;
