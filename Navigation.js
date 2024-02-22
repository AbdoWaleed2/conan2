import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import FSc1 from './FSc1';
import FSc2 from './FSc2';

const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="FSc1" options={{headerShown:false}} component={FSc1}></Stack.Screen>
              <Stack.Screen name="FSc2"  options={{headerShown:false}}  component={FSc2}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default Navigation;