// import lib
import React from 'react';
import { Text, StyleSheet,Image,View } from 'react-native';

// make component
const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>{props.headerText}</Text>
            
        </View>
    )
    
} 

// styling
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor : '#F8F8F8',
            // justfyContent: 'flex-start',
            alignItems: 'center',
            height : 60,
            paddingTop: 15,
            shadowColor: 'black',
            shadowOffset: {width: 0,height:2},
            shadowOpacity:0.2,
            elevation:5,
            position: 'relative'
        },   
        text1: {
            fontSize: 30,
            paddingTop : 5
            // fontFamily: 'helvetica'
        },
        pic:{
            width:30,
            height:30
        }
    }
);

// render
export {Header};

