import React from 'react'
import Login from './Login/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home/Home'

const app = () => {

    const stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name= "Login" component={Login}/>
            <stack.Screen name= "Home" component={Home}/>
        </stack.Navigator>
      </NavigationContainer>
  )
}

export default app