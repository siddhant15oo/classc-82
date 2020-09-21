import React ,{Component}from 'react';
import { StyleSheet,  View ,TouchableOpacity, TextInput, Text, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import db from '../config'
import {ListItem} from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';


export default class BookDonate extends Component{
    constructor(){
        super();
        this.state={
           bookList:[],
        }
        this.requestRef=null
    }
    getBookList=()=>{
        this.requestRef=db.collection('requested_books')
        .onSnapshot((snapshot)=>{
          var requestedBookList=snapshot.docs.map(document=>document.data())
          this.setState({
              requestedBookList:requestedBookList
          })
        })
     
    }
    
    componentDidMount(){
        this.getBookList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    renderItem=({item,i})=>{
      return (
          <ListItem
          key={i}
          title={item.book_name}
          subtitle={item.reason_to_request}
          titleStyle={{color:"red", }}
          rightElement={
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('UserDetail',{'Details':item})
              }}>
                  <Text>View</Text>
              </TouchableOpacity>
          }
          />

          
      )
    }
    render(){
        return(
            <View>
                <Text>hi</Text>
            </View>
        )
    }
}