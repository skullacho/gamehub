import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { JOGOS } from '../data/Games';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Cadastrar Jogo" onPress={() => navigation.navigate('Cadastro')} />
      <FlatList
        data={JOGOS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, backgroundColor: '#fff', marginTop: 10, borderRadius: 8, elevation: 2 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.nome}</Text>
            <Text>{item.plataforma} - R$ {item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
}