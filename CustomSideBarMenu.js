import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
//import {AppTabnavigator} from './components/AppTabNavigator'
import firebase from 'firebase'
import db from '../config'


export default class CustomSideBarMenu extends React.Components{
 render(){
     return(
         <View>
           <DrawerItems {...this.props} />
           <View>
             <TouchableOpacity style={{width:200, height:40}}
             onPress={()=>{
               this.props.navigation.navigate('LoginScreen')
               firebase.auth().signOut()
             }}>
              <Text>Log Out</Text>
             </TouchableOpacity>
           </View>

           
         </View>
         
     )
 }
}