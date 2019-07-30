import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

export class LoginPage extends React.Component{
    render(){
      return(
          <View style={styles.container}>
          
          <Text style={styles.box_red}>登录页面</Text>
          <Text style={styles.box_blue}></Text>
        
          </View>
      );  
    };
}

const styles = StyleSheet.create({
    box_red:{
        flex:1,
        width:40,
        height:40,
        backgroundColor:"#FF0000"
    },
    box_blue:{
        flex:1,
        width:40,
        height:40,
        backgroundColor:"#0000FF"
    },
    box_green:{
        width:40,
        height:40,
        backgroundColor:"#00FF00"
    },
    container:{
        flex:1,
        justifyContent:"center",
        flexDirection:"row"
    }
});