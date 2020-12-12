import React from 'react'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import {Posts} from './screens/posts/Posts'
import {AddPost} from './screens/posts/AddPost'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {SinglePostPage} from './screens/posts/SinglePostPage'
import {EditPost} from './screens/posts/EditPost'



const Stack = createStackNavigator()

export default App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Posts' 
            component={Posts}
            options={{headerTitle:'Social Media Feed App'}}
          />
          <Stack.Screen name='Add Post' component={AddPost}/>
          <Stack.Screen name='Edit Post' component={EditPost}/>
          <Stack.Screen 
            name='Single Post' 
            component={SinglePostPage}
            options={{headerTitle:'View Post'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}