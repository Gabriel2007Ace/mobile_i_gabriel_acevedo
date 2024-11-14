import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyBPKtpRk45_B08ncujXenDvU1hWEbJ2kSk",
    authDomain: "atividadefire-53439.firebaseapp.com",
    projectId: "atividadefire-53439",
    storageBucket: "atividadefire-53439.firebasestorage.app",
    messagingSenderId: "117345839024",
    appId: "1:117345839024:web:575c32140d8d9f702b1875"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Navega para a tela principal após o login
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});