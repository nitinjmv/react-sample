export interface IUser {
  id: number;
  userId: string;
  email: string;
  dob?: Date;
  phone?: number;
  gender: string;
  tnc: boolean;
}
