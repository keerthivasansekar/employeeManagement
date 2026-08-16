import { employeeModel } from './employeeModel';

export interface LoginRequest {
  userName: string;
  password: string;
}

export type UserData = Partial<employeeModel> & {
  userName?: string;
  token?: string;
  [key: string]: any;
};

