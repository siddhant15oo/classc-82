import React from 'react';
import { StyleSheet,  View ,TouchableOpacity, TextInput, Text, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import {createAppStackNavigator} from 'react-navigation-stack'
import BookDonate from '../screens/BookDonate';
import BookRequest from '../screens/BookRequest';

import UserDetails from '../screens/UserDetails'




export const AppStackNavigator=createAppStackNavigator({
   BookDonateList :{
       screen :BookDonate,
       navigationOption:{
           headerShown:false
       }
   },
   UserDetails:{
       screen :UserDetails,
       navigationOption:{
           headerShown:false
           
       }
   },
  
  },
  {initialRouteName:'BookDonateList'}

  )