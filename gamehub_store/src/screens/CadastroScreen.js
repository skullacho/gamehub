import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const salvar = () => {
    if (!nome) { setErro('Campo obrigatório'); return; }
    Alert.alert("Sucesso", "Jogo cadastrado!");
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <CustomInput label="Nome do Jogo" value={nome} onChangeText={setNome} error={erro} />
      <Button title="Salvar" onPress={salvar} color="green" />
    </View>
  );
}