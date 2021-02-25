import React,{Component} from 'react';
import { View,Text, TextInput, KeyboardAvoidingView, StyleSheet,TouchableOpacity, Alert} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';


export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}} > 
                <View style={styles.drawerItemsContainer} >
    <DrawerItems {...this.props}  />
    
                </View>
                <View style={styles.logoutContainer} > 
    <TouchableOpacity  style={styles.logoutButton}
    onPress={()=>{
        this.props.navigation.navigate('SignupLoginScreen')
        firebase.auth().signOut()
    }}
    >
        
<Text style={styles.logoutText} > Log Out </Text>
</TouchableOpacity>
            </View>
             </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    drawerItemsContainer:{
        flex:0.8,

    },
    logoutContainer:{
        flex:0.2,
justifyContent:'flex-end',
paddingBottom:30,

    },
logoutButton:{
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10,


},
logoutText:{
    fontSize:30,
    fontWeight:'bold',
    color:'red',
    

}
})







