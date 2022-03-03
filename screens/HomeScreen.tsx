import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProps} from '../routes';

const HomeScreen: React.FC = () => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>You have not logged in yet.</Text>
      <Button
        onPress={() => {
          navigator.navigate('Login');
        }}>
        Log in
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default HomeScreen;
