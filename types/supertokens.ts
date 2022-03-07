export enum FormFieldId {
  email = 'email',
  password = 'password',
}

export type LoginFormField = {
  id: FormFieldId;
  value: string;
};

export interface UserInputs {
  [x: string]: string;
}

export type User = {
  id: string;
  email: string;
  timeJoined: number;
};

export type UserSignUpResult = {
  user: User;
  id: string;
};

export type LoginFormFields = LoginFormField[];
