import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const IntroScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Trang Chủ');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Đỗ Anh Khoa - 21110208</Text>
    </View>
  );
};

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.homeText}>Đây là trang chủ</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Trang giới thiệu bản thân"
          component={IntroScreen}
        />
        <Stack.Screen name="Trang Chủ" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  homeText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default App;
