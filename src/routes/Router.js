import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home/Home'
import User from '../screens/usuario/User'
import Posts from '../screens/poste/Posts'



const Stack = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Usuario' component={User} />
            <Stack.Screen name='Postes' component={Posts} />

        </Stack.Navigator>
    </NavigationContainer>
  )
};

