import { Document } from "mongoose";
import { IUser, IUserCreate, User } from "../entities/user-entity";

const getUserCount = async (): Promise<number> => {
  return await User.countDocuments();
};

const createUser = async (userData: IUserCreate): Promise<Document<IUser>> => {
  const user = new User(userData);
  const document: Document<IUser> = (await user.save()) as any;
  const userCopy = document.toObject();
  delete userCopy.password;
  delete userCopy.rol;
  return userCopy;
};

export const userOdm = {
  getUserCount,
  createUser,
};
