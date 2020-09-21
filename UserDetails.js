import React from 'react';
import { StyleSheet,  View ,TouchableOpacity, TextInput, Text, Alert, Modal, KeyboardAvoidingView} from 'react-native';

export default class UserDetails extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId:this.props.navigation.getParam('details')["user id"],
            requestId:this.props.navigation.getParam('details')["request id"],
            bookName:this.props.navigation.getParam('details')["book name"],
            reasonForRequest:this.props.navigation.getParam('details')["reason to request"],
            recieverContact:'',
            recieverAddress:'',
            recieverName:'',
            recieverRequestDocId:'',

        }
    }
  render(){
      return(
          
      )
  }
}