import React from 'react';
import { Text, ScrollView, StyleSheet, View ,DeviceEventEmitter,requireNativeComponent} from 'react-native';
var ScanView = requireNativeComponent('ScanView',ScanView,{});
export class FlexLayoutPage extends React.Component{

    // ...
componentDidMount() {
    // DeviceEventEmitter.addListener('keyboardWillShow', (e: Event) => {
    //   // handle event.
    // });
  }
  componentWillUnmount() {
    // When you want to stop listening to new events, simply call .remove() on the subscription
    // this.subscription.remove();
  }

    render(){
      return(
          <View style={styles.container}>
          
          <Text style={styles.box_red}></Text>
          <Text style={styles.box_blue}></Text>
          <ScanView
               onScanCodeRead={(event)=>{
                console.log("linchangjian");
                console.log(event);


            }}
            {...this.props} >
            </ScanView>
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