import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface IUserToken {
  user: any;
  createDate: any;
  token: string;
}
const tokenSchema: Schema = new Schema<IUserToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
    token: {
      type: String,
    },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);

const Token = model<IUserToken>("usersTokens", tokenSchema);

export default Token;

export async function generateToken(userId: any): Promise<any> {
  const N = 30;
  const generated_token = await Array(N + 1)
    .join((Math.random().toString(36) + "8782").slice(2, 18))
    .slice(0, N);

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(generated_token, salt);
  let generatedToken = await hashed;

  return await new Promise<any>(async (resolve, reject) => {
    try {
      const data = new Token({
        user: userId,
        token: generatedToken,
      });
      data.save()
  resolve(data.token)
    } catch (error) {
      reject('jgdgafdsgfasdgfgfgfdsufuausdfggasfdhgkakg')
    }
   
  });
}
