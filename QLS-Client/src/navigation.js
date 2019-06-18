import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './screens/Login'
import Register from './screens/Register'

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
    }
},
    {
        initialRouteName: 'Login',
        headerMode: 'float',
    });

export default createAppContainer(AppNavigator);
