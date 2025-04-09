import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { style } from "./style";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, seTPassword] = useState('');
  const navigation = useNavigation();

  function getlogin() {
    if (!email || !password) {
      return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
    }

    Alert.alert('Seja bem vindo');
    navigation.navigate('User');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={50}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <LinearGradient
            colors={['#00c6ff', '#0072ff']}
            style={style.container}
          >
            <View style={style.boxtop}>
              <Image
                source={Logo}
                style={{ width: 100, height: 100, borderRadius: 20, marginTop: 240 }}
              />
            </View>

            <View style={style.boxMid}>
              <TextInput
                style={style.caixa}
                placeholder="Usuário"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={setEmail}
              />

              <TextInput
                style={style.caixa}
                placeholder="Senha"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={seTPassword}
                secureTextEntry
              />
            </View>

            <View style={style.bottom}>
              <TouchableOpacity style={style.buttom} onPress={getlogin}>
                <Text style={{ color: '#ffffff' }}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <View style={[style.cadastrese, { marginTop: -200 }]}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#ffffff' }}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
