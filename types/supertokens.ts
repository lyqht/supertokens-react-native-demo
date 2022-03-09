export enum FormFieldId {
  email = 'email',
  password = 'password',
}

export type LoginFormField = {
  id: FormFieldId;
  value: string;
};

export type LoginRequestBody = {
  formFields: LoginFormField[];
};

export interface UserInputs {
  [x: string]: string;
}

export type User = {
  id: string;
  email: string;
  timeJoined: number;
};

export type UserLoginResult = {
  user: User;
  id: string;
};
