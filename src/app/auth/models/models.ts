export interface SignUpModel {
  name: string,
  login: string,
  password: string,
}

export interface LoginModel {
  name: string,
  login: string,
  password: string,
}

export interface Error {
  status?: number;
  statusText?: string;
}