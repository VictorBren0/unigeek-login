import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions 
} from 'react-native';
import Logo from '../../../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Register({ navigation }) {
  return (
    <ScrollView style={{height: "100%"}}>
    <SafeAreaView style={style.container}>
      
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={style.back}
          name={'arrow-back'}
          size={40}
          color={'#FFFFFF'}
        />
      </TouchableOpacity>
      <Image style={style.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 80 }}/>
      <View style={{flexDirection: 'row' }}>
      <Icon
          name={'email'}
          size={35}
          color={'#FFFFFF'}
          style={style.icon}
        />
        <TextInput
          placeholder="EMAIL"
          placeholderTextColor="#FFFFFF"
          style={style.input}
          />
        </View>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
        <Icon
          name={'person'}
          size={35}
          color={'#FFFFFF'}
          style={style.icon}
        />
        <TextInput
          placeholder="USUÁRIO"
          placeholderTextColor="#FFFFFF"
          style={style.input}
        />
        </View>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
        <Icon
          name={'lock'}
          size={35}
          color={'#FFFFFF'}
          style={style.icon}
        />
        <TextInput
          placeholder="SENHA"
          placeholderTextColor="#FFFFFF"
          style={style.input}
        />
        </View>
        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
        <Icon
          name={'lock'}
          size={35}
          color={'#FFFFFF'}
          style={style.icon}
        />
        <TextInput
          placeholder="COMFIRME SUA SENHA"
          placeholderTextColor="#FFFFFF"
          style={style.input}
        />
        </View>
        <View style={{ paddingTop: 80 }}>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Login")}>
          <Text style={[style.bottonText, { color: '#3D0128' }]}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
    </ScrollView>
  );
}
const {height} = Dimensions.get("window")
const style = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#3D0128',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },
  image: {
    height: "15%",
  },
  input: {
    height: 50,
    width: 310,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    paddingLeft: 10
  },
  back: {
    position: 'absolute',
    bottom: 40,
    right: 140
  },
  icon: {
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    paddingTop: 5
  },
  button: {
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
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    color: '#EFD741',
    paddingTop: 40,
    paddingLeft: 150
  }

});