import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import both from './both';
import yes from './yes';

const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="both" component={both}></Stack.Screen>
              <Stack.Screen name="yes" component={yes}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default App;