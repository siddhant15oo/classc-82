import React ,{Component}from 'react';
import { StyleSheet,  View ,TouchableOpacity, TextInput, Text, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class BookRequest extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:''
        }
    }
     createUniId(){
         return Math.random().toString(36).substring(7)
     }
    addRequest=(bookName, reasonToRequest)=>{
      var userId=this.state.userId
      var randomRequestId=this.createUniId()
      db.collection('requested_books').add({
          "usr_id":userId,
          "book_name":bookName,
          "reason_to_request":reasonToRequest,
          "requestId":randomRequestId
      })
      this.setState({
          bookName:'',
          reasonToRequest:'',
      })
      return Alert.alert("book requested successfully")
    }

    
    render(){
        return(
            <KeyboardAvoidingView>
                <TextInput placeholder="Book Name"
                style={{borderWidth:1, height:40, width:200}}
                onChangeText={(text)=>{
                  this.setState({
                      bookName:text
                  })
                }}
                value={this.state.bookName} />
                
                <TextInput placeholder="Reason To Request"
                style={{borderWidth:1, height:40, width:200}}
                onChangeText={(text)=>{
                  this.setState({
                      reasonToRequest:text
                  })
                }}
                value={this.state.reasonToRequest}
                multiline 
                numberOfLines={10} />
                <View>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:"red", alignItems:"center"}}
                    onPress={()=>{

                    }}>
                        <Text>Submit Reason</Text>
                    </TouchableOpacity>
                </View>

                
            </KeyboardAvoidingView>
        )
    }
}