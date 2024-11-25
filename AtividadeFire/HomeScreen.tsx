// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    initializeApp.auth().signOut();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Bem-vindo(a)!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
