import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import Logo from '../../assets/image/LOGO.png';

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={Logo} resizeMode="contain" />
      <View style={{ paddingTop: 100 }}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Register")}>
          <Text style={[styles.bottonText, { color: '#FFFFFF' }]}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.bottonText, { color: '#3D0128' }]}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
          <Text style={[styles.bottonText, { color: '#EFD741' }]}>Convidado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#3D0128',
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