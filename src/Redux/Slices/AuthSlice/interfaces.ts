// export interface IUser {
//   user: {
//     name: string;
//     email: string;
//     type?: string;
//   } | null|any;
//   isError: boolean;
//   isSuccess: boolean;
//   isLoading: boolean;
//   message: any;
// }
export interface Iregister {
  name: string;
  email: string;
  password: string;
  // cPassword: string;
  // isVerified: boolean;
  // isAdmin: boolean;
}
export interface IUser {
  user: any;

  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
