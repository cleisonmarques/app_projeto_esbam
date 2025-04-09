import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function Register() {
  return (
    <LinearGradient
      colors={['#b3d9ff', '#3366cc']}
      style={styles.container}
    >
      <Text style={styles.title}>Criar Conta</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={24} color="#333" />
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#555" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person-outline" size={24} color="#333" />
        <TextInput style={styles.input} placeholder="Sobrenome" placeholderTextColor="#555" />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="phone" size={24} color="#333" />
        <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor="#555" keyboardType="phone-pad" />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#333" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#555" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#333" />
        <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#555" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
