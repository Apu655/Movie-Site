export interface IUser {
  user: {
    name: string;
    email: string;
    type?: string;
  } | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
