import React from 'react'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import {Posts} from './screens/posts/Posts'
import {AddPost} from './screens/posts/AddPost'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Posts' component={Posts}/>
          <Stack.Screen name='Add Post' component={AddPost}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}