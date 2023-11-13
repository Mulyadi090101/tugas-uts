import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Saya</Text>
     
      <Text style={styles.story}>
        Temukan pengalaman baru dengan Aplikasi Saya. Jelajahi konten yang
        menginspirasi, bagikan kreasi Anda, dan terhubung dengan komunitas
        kreatif Saya.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("room-service")}>
        <Text style={styles.buttonText}>Ayo Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'bluesky',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
    color: 'black',

  },
  story: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
    
  },
  cta: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor:'black',
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    top: 380,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default Home;

