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
  Dimensions,
  Alert
} from 'react-native';
import Logo from '../assets/image/LOGO.png';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function ForgotPassword({ navigation }) {
  const Alerta = () =>
Alert.alert('Atenção', 'Você receberá um email contendo todas as informações para recuperar sua senha!', [

  {text: 'OK', onPress: () => navigation.navigate("InitialScreen")},
]);
  return (
    <ScrollView style={{height: "100%"}}>
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.back}
          name={'arrow-back'}
          size={40}
          color={'#FFFFFF'}
        />
      </TouchableOpacity>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 100 }}/>
      <Text style={styles.text}>Você receberá por email um link para cadastrar uma nova senha!</Text>
      <View style={{flexDirection: 'row', paddingTop: 50 }}>
      <Icon
          name={'email'}
          size={35}
          color={'#FFFFFF'}
          style={styles.icon}
        />
        <TextInput
          placeholder="EMAIL"
          placeholderTextColor="#FFFFFF"
          style={styles.input}
          />
        </View>
        <View style={{ paddingTop: 130 }}>
        <TouchableOpacity style={styles.button} onPress={Alerta}>
          <Text style={[styles.bottonText, { color: '#3D0128' }]}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
    </ScrollView>
  );
}
const {height} = Dimensions.get("window")
const styles = StyleSheet.create({

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
    bottom: 50,
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
    fontSize: 18,
    color: '#EFD741',
    width: 334,
    height: 50,
    textAlign: 'center'
  }

});