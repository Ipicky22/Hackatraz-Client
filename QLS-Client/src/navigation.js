// import { createDrawerNavigator, createAppContainer } from "react-navigation";

// import Login from './screens/Login'
// import Register from './screens/Register'
// import Home from './screens/Home'

// const AppNavigator = createDrawerNavigator({

//     Login: {
//         screen: Login,
//         // navigationOptions: {
//         //     header: null
//         // }
//     },
//     Register: {
//         screen: Register,
//         // navigationOptions: {
//         //     header: null
//         // }
//     },
//     Home: {
//         screen: Home,
//     }
// },
// {
//     drawerWidth: 300,
//     drawerPosition: 'left',
//     initialRouteName: 'Home',
// });

// export default createAppContainer(AppNavigator);


import React from "react"
import { Platform, Dimensions } from "react-native"
import { createDrawerNavigator, createAppContainer } from "react-navigation"

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Entreprenariat from './screens/Entreprenariat'
import Culture from './screens/Culture'
import Videos from './screens/Videos'

const WIDTH = Dimensions.get("window").width

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,

}

const AppNavigator = createDrawerNavigator({
    Videos: {
        screen: Videos
    },
    Entreprenariat: { 
        screen: Entreprenariat 
    },
    Home: { 
        screen: Home 
    },
    Login: { 
        screen: Login 
    },
    Register: { 
        screen: Register 
    },
    Culture: { 
        screen: Culture 
    }
},
    DrawerConfig)

export default createAppContainer(AppNavigator)