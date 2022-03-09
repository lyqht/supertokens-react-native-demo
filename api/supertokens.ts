import axios, {AxiosResponse} from 'axios';
import {
  FormFieldId,
  LoginRequestBody,
  UserInputs,
  UserLoginResult,
} from '../types/supertokens';

const SIGNUP_PATH = '/signup';
const SIGNIN_PATH = '/signin';

const createLoginRequestBody = (
  email: string,
  password: string,
): LoginRequestBody => {
  return {
    formFields: [
      {
        id: FormFieldId.email,
        value: email,
      },
      {
        id: FormFieldId.password,
        value: password,
      },
    ],
  };
};

export const signUpUser = ({
  email,
  password,
}: UserInputs): Promise<AxiosResponse<UserLoginResult>> => {
  return axios.post(SIGNUP_PATH, createLoginRequestBody(email, password));
};

export const signInUser = ({
  email,
  password,
}: UserInputs): Promise<AxiosResponse<UserLoginResult>> => {
  return axios.post(SIGNIN_PATH, createLoginRequestBody(email, password));
};
