import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteListScreen from './screens/NoteListScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NoteListStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="NoteList" component={NoteListScreen} />
  </Stack.Navigator>
);

const AboutStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notes" component={NoteListStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
