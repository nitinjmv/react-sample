import { IUser } from "../types/IUser";

export const save = (key: string, user: IUser) => {
  localStorage.setItem(key, JSON.stringify(user));
};

export const get = () => {};

export const count = () => {};
