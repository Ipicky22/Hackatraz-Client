import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'

const AppNavigator = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
},
    {
        initialRouteName: 'Login',
        headerMode: 'float',
    });

export default createAppContainer(AppNavigator);
