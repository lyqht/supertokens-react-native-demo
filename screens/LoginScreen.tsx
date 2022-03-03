import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUpComponent from '../components/SignUp';
export interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginScreen: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const loginComponentProps: LoginComponentProps = {
    email,
    password,
    setEmail,
    setPassword,
  };

  return (
    <SafeAreaView>
      <SignUpComponent {...loginComponentProps} />
    </SafeAreaView>
  );
};

export default LoginScreen;
