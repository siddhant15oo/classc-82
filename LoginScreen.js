import React from 'react';
import { StyleSheet,  View ,TouchableOpacity, TextInput, Text, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'


import firebase from 'firebase'
import db from '../config'
import SantaAnimation from '../components/Santa.js'


export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
          email:'',
          password:'',
          isModalVisible:'false',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          confirmPassword:''        
        }
    }

    userSigninFunction=(email,password,confirmPassword)=>{
      if(password !== confirmPassword){
        return Alert.alert("password Is Wrong")
      }
      else{

      
       firebase.auth().createUserWithEmailAndPassword(email,password,confirmPassword)
       .then((response)=>{
         return Alert.alert("user added")
         
       })
       .catch(function(error)
       {
         var errorCode=error.code;
         var errorMessage=error.massage;
         return Alert.alert(errorMessage)
       }
       )
       db.collection('users').add({
         firstName:this.state.firstName,
         lastName:this.state.lastName,
         email:this.state.email,
         address:this.state.address,
         contact:this.state.contact
       })
      }
    }

    userLoginFunction=(email,password)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((response)=>{
        return Alert.alert("logged in")
      })
      .catch((error)=>
      {
        var errorCode=error.code;
        var errorMessage=error.massage;
        return Alert.alert(errorMessage)
      }
      )
   }

   showModal=()=>{
     return (
     //  <View>

       //this.showModal()
      // </View>
       <Modal 
       animationType="fade"
       transparent={true}
       visible={this.state.isModalVisible}>
         <View>
           <ScrollView >
             <KeyboardAvoidingView>
               <Text>
                 Registration
               </Text>
               <TextInput placeholder="First Name"
               maxLength={100}
               onChangeText={(text)=>{
                this.setState({
                  firstName:text
                })
               }}>

               </TextInput>
               <TextInput placeholder="Last Name"
               maxLength={100}
               onChangeText={(text)=>{
                this.setState({
                  lastName:text
                })
               }}>

               </TextInput>
               <TextInput placeholder="Contact"
               maxLength={20}
               keyboardType={'numeric'}
               onChangeText={(text)=>{
                this.setState({
                  contact:text
                })
               }}>

               </TextInput>
               <TextInput placeholder="Address"
               multiline={true}
               onChangeText={(text)=>{
                this.setState({
                  address:text
                })
               }}>

               </TextInput>

               <TextInput placeholder="Email"
               maxLength={300}
               secureTextEntry={true}
               onChangeText={(text)=>{
                this.setState({
                  email:text
                })
               }}>

               </TextInput>

               <TextInput placeholder="Password"
               maxLength={20}
               secureTextEntry={true}
               onChangeText={(text)=>{
                this.setState({
                  password:text
                })
               }}>
                 
               </TextInput>

               <TextInput placeholder="Confirm Password"
               maxLength={20}
               secureTextEntry={true}
               onChangeText={(text)=>{
                this.setState({
                  confirmPassword:text
                })
               }}>

               </TextInput>
               <View>
                 <TouchableOpacity style={styles.loginButton}
                  onPress={()=>this.setState({
                    "isModalVisible":false
                  })}>
                   <Text>
                   Cancel
                   </Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.loginButton}
                  onPress={()=>this.userSigninFunction(this.state.email,this.state.password,this.state.confirmPassword)}>
                   <Text>
                   Register
                   </Text>
                   </TouchableOpacity>

               </View>

             </KeyboardAvoidingView>

           </ScrollView>

         </View>

       </Modal>
     )
   }


  render(){
    return (
      <View style={{}}>
        <SantaAnimation />
        <Text>BookSanta</Text>
        
        <TextInput placeholder="Email" 
        style={styles.container}
        keyboardType="email-address"
        onChangeText={(text)=>{
            this.setState({
                email:text,
                
            })
        }}
        />   
        


        <TextInput placeholder="Password" 
        style={styles.container}
        keyboardType="email-address"
        onChangeText={(text)=>{
            this.setState({
                password:text,
                
            })
        }}
        secureTextEntry={true}/>
        <View>
            <TouchableOpacity style={styles.loginButton}
           onPress={()=>{this.userSigninFunction(this.state.email,this.state.password)}} >
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.loginButton}
           onPress={()=>{this.userLogininFunction(this.state.email,this.state.password)}} >
                <Text>Login In</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
    container: {
      width:200,
      height:40,
      borderWidth:1,
      alignItems: 'center',
      
    },
    loginButton:{
        backgroundColor:"#ffffff",
        width:50,
        height:50,
        alignItems: 'center',
        
    }
  });

  