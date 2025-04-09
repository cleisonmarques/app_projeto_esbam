// src/pages/user/index.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // lupa = search
import { styles } from './style';

export default function User() {
  return (
    <View style={styles.container}>
      
      {/* Caixa de pergunta com ícone de lupa */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#333" style={styles.searchIcon} />
        <TextInput
          placeholder="Onde você deseja saber?"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Três caixas com status */}
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>💧 Tratada</Text>
      </View>

      <View style={styles.statusBox}>
        <Text style={styles.statusText}>⚠️ Em tratamento</Text>
      </View>

      <View style={styles.statusBox}>
        <Text style={styles.statusText}>🚫 Não potável</Text>
      </View>
      
    </View>
  );
}
