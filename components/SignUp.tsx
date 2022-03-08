import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Alert, Linking, StyleSheet, View} from 'react-native';
import {
  Button,
  Caption,
  Card,
  Divider,
  Headline,
  Subheading,
  Text,
  TextInput,
} from 'react-native-paper';
import {signUpUser} from '../api/supertokens';
import {NavigationProps} from '../routes';
import {LoginComponentProps} from '../screens/LoginScreen';

const SignUpComponent: React.FC<LoginComponentProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const navigator = useNavigation<NavigationProps>();
  return (
    <Card style={styles.card}>
      <View style={styles.textContainer}>
        <Headline>Sign up</Headline>
        <Subheading>
          Already have an account? <Text style={styles.urlText}>Sign In</Text>
        </Subheading>
      </View>
      <Divider style={styles.divider} />
      <TextInput
        style={styles.input}
        label="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        mode="contained"
        color="#ff9933"
        onPress={() => {
          signUpUser({email, password})
            .then(result => {
              console.log(result);
              Alert.alert('User created', `${result.data.user.id}`, [
                {text: 'OK', onPress: () => navigator.navigate('Home')},
              ]);
            })
            .catch(err => console.warn(JSON.stringify(err)))
            .finally(() => console.log('Supertokens API has been called'));
        }}>
        Sign up
      </Button>
      <View style={styles.textContainer}>
        <Caption>
          By signing up, you agree to our{' '}
          <Text
            style={styles.urlText}
            onPress={() =>
              Linking.openURL(
                'https://supertokens.com/legal/terms-and-conditions',
              )
            }>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text
            style={styles.urlText}
            onPress={() => {
              Linking.openURL('https://supertokens.com/legal/privacy-policy');
            }}>
            Privacy Policy
          </Text>
        </Caption>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  urlText: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    textAlign: 'center',
  },
  divider: {
    margin: 12,
  },
  input: {
    marginVertical: 12,
  },
});

export default SignUpComponent;
