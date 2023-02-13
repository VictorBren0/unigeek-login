import React, { useState, useEffect } from 'react';
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
import { getMaps } from '../../services/api';


export default function Map({ navigation }) {

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [listMap, setListMap] = useState([]);

  const getMap = async () => {
    const response = await getMaps();
    setListMap(response.data);
  }

  useEffect(() => {
    getMap()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 30}}>
      <Text style={styles.titleText}>
        Selecione o local desejado:
      </Text>
      </View>

      <FlatList
        data={listMap}
        horizontal
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectedId(item.id, setSelectedItem(item.file))}
          >
            <Text style={[styles.buttonText, item.id === selectedId ? styles.selectedButtonText : null]}>
              {item.floor}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={{flex: 10}}>
      {selectedId && (
        <Image
        source={{ uri: `http://192.168.100.8:3000/uploads/${selectedItem}` }}
        style={{ width: 360, height: 140, resizeMode: 'contain'}}
      />
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