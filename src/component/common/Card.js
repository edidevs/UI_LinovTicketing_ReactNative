import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            <View>
                {props.children}
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}
export { Card };