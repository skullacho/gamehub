import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function CustomInput({ label, error, ...props }) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{label}</Text>
      <TextInput style={{ borderWidth: 1, borderColor: error ? 'red' : '#ccc', padding: 10, borderRadius: 5 }} {...props} />
      {error && <Text style={{ color: 'red', fontSize: 12 }}>{error}</Text>}
    </View>
  );
}