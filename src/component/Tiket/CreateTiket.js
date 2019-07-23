import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input,Button } from '../common';
import axios from 'axios';

class CreateTiket extends Component {
    state = {
        todos: [],
        judul:' ',
        testPost : {
            "judulTiket" : ' ',
            "idPic" : { "idPic" :"692931f7-21f6-4fcc-8cdf-51ebccd4d8ee"},
            "level" : "standart",
            "status" : "open",
            "detailTiket" : []
        }
    }

    createTiket(){
    //     // axios.post('http://149.129.249.109:8080/Ticketing/tiket/',this.state.testPost).then(response => console.log(response));
        axios.post('http://192.168.43.70:8080/tiket/',this.state.testPost)
    }
    
    render() {
        console.log(this.state.testPost);
        
        return (
            <Card>
                <CardSection>
                    <Input label="Judul Tiket" onChangeText={ judull =>this.setState({testPost:{
            "judulTiket" : judull,
            "idPic" : { "idPic" :"692931f7-21f6-4fcc-8cdf-51ebccd4d8ee"},
            "level" : "standart",
            "status" : "open",
            "detailTiket" : []
        }})}/>
                </CardSection>
                <CardSection>
                    <Input label="Detail Laporan" />
                </CardSection>
                <CardSection>
                    <Button title="Mashok !" 
                    // onPress={this.createTiket()}
                    />
                </CardSection>
            </Card>
        )
    }
}

const Styles = {
    userInput: {
        flexDirection: 'column'
    }
}

export { CreateTiket };