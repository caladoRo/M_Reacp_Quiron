import React, {Component} from 'react';
import {SafeAreaView, StyleSheet,FlatList, ScrollView, View, Text, StatusBar, AsyncStorage, ImageBackground, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Pacientes extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image 
            source = {require('../assets/img/icon-patient.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        )
      }



    constructor(){
        super();
        this.state={
            pacientes:[],
        };
    }

    componentDidMount () {
        this._listarPacientes();
    }

    _listarPacientes = async() =>{
        try {
            await fetch("http://192.168.6.115:5000/api/pacientes", {
                headers: {
                        'Accept':'application/json'
                },
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({pacientes: data}))
        } catch (error) {
        }
            
        };

    render(){
        return(
            <ScrollView style={{backgroundColor: 'black'} }>
            <View >
                <Image style={{height: 60, width:300, margin: 15}} source={require('../assets/img/recap_white.png')} />
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 20, marginTop: 15 }}>Nossos Pacientes</Text>
                    </View>
                        <FlatList
                            data={this.state.pacientes}
                            keyExtractor={item => item.idPaciente}
                            renderItem={({ item }) => (
                                <View style={{margin: 10}}>
                                    <Text style={styles.font}>Nome: {item.nome}</Text>
                                    <Text style={styles.font}>Data de Nascimento: {item.dataNascimento}</Text>
                                    <Text style={styles.font}>CPF: {item.cpf}</Text>
                                    <Text style={styles.font}>Médico: {item.idMedicoNavigation.nome}</Text>
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

export default Pacientes
