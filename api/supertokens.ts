import axios, {AxiosResponse} from 'axios';
import {
  FormFieldId,
  LoginFormFields,
  UserInputs,
  UserSignUpResult,
} from '../types/supertokens';

const SIGNUP_PATH = '/signup';
const SIGNIN_PATH = '/signin';

const createFormFields = (email: string, password: string): LoginFormFields => {
  return [
    {
      id: FormFieldId.email,
      value: email,
    },
    {
      id: FormFieldId.password,
      value: password,
    },
  ];
};

export const signUpUser = ({
  email,
  password,
}: UserInputs): Promise<AxiosResponse<UserSignUpResult>> => {
  return axios.post(SIGNUP_PATH, {
    formFields: createFormFields(email, password),
  });
};

export const signInUser = ({
  email,
  password,
}: UserInputs): Promise<AxiosResponse<UserSignUpResult>> => {
  return axios.post(SIGNIN_PATH, {
    formFields: createFormFields(email, password),
  });
};
