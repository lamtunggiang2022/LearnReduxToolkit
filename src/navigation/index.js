import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AddToDo from '../screens/AddToDo'
import EditToDo from '../screens/EditToDo'
import ViewToDos from '../screens/ViewToDos'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='AddToDo'
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name='AddToDo'
                    component={AddToDo}
                    options={{ title: 'AddToDo' }}
                />
                <Stack.Screen
                    name='EditToDo'
                    component={EditToDo}
                    options={{ title: 'EditToDo' }}
                />
                <Stack.Screen
                    name='ViewToDos'
                    component={ViewToDos}
                    options={{ title: 'ViewToDos' }}
                />
        </Stack.Navigator>
    </NavigationContainer>)
}
