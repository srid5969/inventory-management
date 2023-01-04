import { Schema, model } from "mongoose";
interface IUser {
  id: number;
  username: string;
  password: string;
}
export const userSchema = new Schema<IUser>({
  id: { required: false, unique: true },
  username: { required: true, unique: true },
  password: { required: true, unique: true },
});
const User = model<IUser>("users", userSchema);
export default User;
