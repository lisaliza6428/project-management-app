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

export interface AuthDataModel {
  id: string,
  login: string,
  name: string,
}

export interface ErrorModel {
  status?: number;
  statusText?: string;
}