import React from 'react'
import { View, StyleSheet , Text} from 'react-native';

const BoxExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};


export default function Room_service() {
  return (
    <View>
      <Text>Room_service</Text>
      <BoxExample />
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Membuat kotak-kotak dalam satu baris
    justifyContent: 'space-between', // Menyusun kotak secara merata di sepanjang baris
    padding: 20,
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});