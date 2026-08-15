export interface LoginRequest {
  userName: string;
  password: string;
}

export interface UserData {
  userId?: number;
  userName?: string;
  emailId?: string;
  role?: string;
  token?: string;
  [key: string]: any;
}
