import React, {Component} from 'react';
import {SafeAreaView, StyleSheet,FlatList, ScrollView, View, Text, StatusBar, AsyncStorage, ImageBackground, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Medicos extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image 
            source = {require('../assets/img/icon-doctor.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        )
      }



    constructor(){
        super();
        this.state={
            medicos:[],
        };
    }

    componentDidMount () {
        this._listarMedicos();
    }

    _listarMedicos = async() =>{
        try {
            await fetch("http://192.168.6.115:5000/api/medicos", {
                headers: {
                        'Accept':'application/json'
                },
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({medicos: data}))
        } catch (error) {
        }
            
        };

    render(){
        return(
            <ScrollView style={{backgroundColor: 'black'}}>
            <View>
                <Image style={{height: 60, width:300, margin: 15}} source={require('../assets/img/recap_white.png')} />
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 20, marginTop: 15 }}>Nossos Médicos</Text>
                    </View>
                        <FlatList
                            data={this.state.medicos}
                            keyExtractor={item => item.idMedico}
                            renderItem={({ item }) => (
                                <View style={{margin: 10}}>
                                    <Text style={styles.font}>Nome: {item.nome}</Text>
                                    <Text style={styles.font}>CRM: {item.crm}</Text>
                                    <Text style={styles.font}>CRM UF: {item.crmUf}</Text>
                                    <View style={{alignItems: 'center'}}>
                                    <Text style={styles.linhaDivisao}></Text>
                                    </View>  
                                </View>
                            )}
                        />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    font:{
        color: 'white',
        fontSize: 14,
        marginLeft: 21
    },
    linhaDivisao:{
        width: 400,
        height: 3,
        margin: 21,
        backgroundColor: '#131313'
    },
})

export default Medicos
