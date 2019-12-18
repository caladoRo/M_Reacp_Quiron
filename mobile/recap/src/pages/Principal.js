import React, {Component} from 'react';
import {SafeAreaView, StyleSheet,FlatList, ScrollView, View, Text, StatusBar, AsyncStorage, ImageBackground, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Principal extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image 
            source = {require('../assets/img/whitehome.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        )
      }
    render(){
        return(
            <ScrollView style={{backgroundColor: 'black'}}>
            <View>
                <View>
                <View style={{alignItems: 'center'}}>
                <Image style={{height:320, width:'100%'}} source={require('../assets/img/background-mobile.png')}/>
                </View>
                <View style={styles.page}>
                <Text style={styles.titulos}>Médicos de qualidade e confiança </Text> 
                <Text style={styles.titulos}>em todas as especilidades</Text>
                </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  titulos:{
    color: '#fff', 
    fontSize: 16, 
    marginLeft: 25,
    fontWeight: "bold"
  },
  lancamentosRetangulos:{
    height:115, 
    width:84
  },
  page:{
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
  }
})

export default Principal