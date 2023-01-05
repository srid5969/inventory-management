import { Schema, model } from "mongoose";

export interface IUser {
  id: any; _id: any;
  username: string;
  password: string;
  role: string;
}
export const userSchema: Schema = new Schema<IUser>(
  {
    id: { type:Schema.Types.ObjectId,required: false, unique: true, index: true },
    username: { type:String,required: true, unique: true },
    password: { type:String,required: true, unique: true, select: false },
    role: {
      enum: {
        values: ["Admin"],
      },
    },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);

userSchema.methods.setPassword = function (password: string) {};

userSchema.methods.validPassword = function (password: any) {
  return "this.hash === hash";
};
const User = model<IUser>("users", userSchema);
export default User;
