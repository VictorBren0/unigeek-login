import React, { useState } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '1', title: 'Estacionamento' },
  { id: '2', title: 'Terreo' },
  { id: '3', title: '1º andar' },
  { id: '4', title: '2º andar' },
  { id: '5', title: '3º andar' },
  { id: '6', title: '4º andar' },
  { id: '7', title: '5º andar' },
  { id: '8', title: '6º andar' },
  { id: '9', title: '7º andar' },
  { id: '10', title: '8º andar' },
  { id: '11', title: '9º andar' },
  { id: '12', title: 'Mesanino' },
];

export default function Map({ navigation }) {

  const [selectedId, setSelectedId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 30}}>
      <Text style={styles.titleText}>
        Selecione o local desejado:
      </Text>
      </View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedId(item.id)}
          >
            <Text style={[styles.buttonText, item.id === selectedId ? styles.selectedButtonText : null]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
      {selectedId && (
        <Text style={{ fontSize: 20, color: '#111' }}>
          {data.find(item => item.id === selectedId).title}
        </Text>
      )}
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2C2626',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 130,
    height: 55,
    backgroundColor: '#1C1C1C',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#FFFFFF'
  },
  selectedButtonText: {
    borderBottomWidth: 3,
    borderBottomColor: '#011AFF',
  },
  titleText: {
    fontSize: 21,
    fontFamily: 'Rubik-Regular',
    color: '#FFFFFF'
  },




});