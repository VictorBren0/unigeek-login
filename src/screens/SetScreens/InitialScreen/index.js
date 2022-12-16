import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import Logo from '../../../assets/image/LOGO.png';

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <Image style={style.image} source={Logo} resizeMode="contain" />
      <View style={{paddingTop: 100}}>
      <TouchableOpacity style={style.buttonRegister}>
        <Text style={[style.bottonText, {color: '#FFFFFF'}]}>CADASTRAR</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingTop: 30}}>
      <TouchableOpacity style={style.buttonLogin}>
        <Text style={[style.bottonText, {color: '#560464'}]}>ENTRAR</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingTop: 30}}>
      <TouchableOpacity>
      <Text style={[style.bottonText, {color: '#EA0B41'}]}>Convidado</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#560464',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    height: "15%",
  },
  buttonRegister: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFD741',
    borderRadius: 10,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  buttonLogin: {
    width: 281,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
  },
  bottonText: {
    fontFamily: 'Rubik-One',
    fontSize: 22

  }

});