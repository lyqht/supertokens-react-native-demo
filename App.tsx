import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './routes';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SuperTokens from 'supertokens-react-native';
import axios from 'axios';

const apiDomain = 'http://192.168.1.3:3001'; // TODO: change url to your own IP address

SuperTokens.addAxiosInterceptors(axios);
axios.defaults.baseURL = 'http://localhost:3001/auth';
axios.defaults.headers.common.rid = 'emailpassword';
axios.defaults.headers.post['Content-Type'] = 'application/json';
SuperTokens.init({
  apiDomain,
  apiBasePath: '/auth',
});

const RootStack = createNativeStackNavigator<RootStackParamList>();

const NavStack = () => (
  <RootStack.Navigator initialRouteName="Home">
    <RootStack.Screen name={'Home'} component={HomeScreen} />
    <RootStack.Screen name={'Login'} component={LoginScreen} />
  </RootStack.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
