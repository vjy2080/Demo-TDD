import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App({ onSend }) {
  const [inputText, setInputText] = useState('');
  const handleSend = () => {
    if (onSend) {
      onSend(inputText);
    }
    setInputText('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Message"
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
  },
});
