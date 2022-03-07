import axios, {AxiosResponse} from 'axios';
import {
  FormFieldId,
  LoginFormFields,
  UserInputs,
  UserSignUpResult,
} from '../types/supertokens';

const BASE_PATH = 'http://localhost:3001/auth';
const SIGNUP_PATH = BASE_PATH + '/signup';

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
