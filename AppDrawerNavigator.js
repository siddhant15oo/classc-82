import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './CustomSideBarMenu'
import AppTabnavigator from './AppTabNavigator'


export const AppDrawerNavigator=createDrawerNavigator({
    Home :{
       screen:AppTabnavigator
    },
},
    {

        contentComponent:CustomSideBarMenu
    },
    {
},

{initialRouteName:'Home'}
)