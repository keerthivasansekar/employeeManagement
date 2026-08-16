export interface ApiResponse<T = any> {
  message: string;
  result: boolean;
  data: T;
}
