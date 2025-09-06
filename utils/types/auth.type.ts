export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  country: number;
  countryCode: number;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface ILogin {
  identifier: string;
  password: string;
}

export interface IOtp {
  otp: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}
