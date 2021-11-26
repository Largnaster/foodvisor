import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>a</Text>
      <ul>
      <li>"@react-native-community/masked-view": "0.1.6",</li>
      <li>"@react-navigation/bottom-tabs": "~5.2.6",</li>
      <li>"@react-navigation/native": "~5.1.5",</li>
      <li>"@react-navigation/stack": "~5.2.10",</li>
      <li>"base-64": "~0.1.0",</li>
      <li>"expo": "~37.0.3",</li>
      <li>"expo-image-picker": "^8.1.0",</li>
      <li>"expo-location": "^8.1.0",</li>
      <li>"expo-permissions": "^8.1.0",</li>
      <li>"firebase": "~7.9.0",</li>
      <li>"lodash": "^4.17.15",</li>
      <li>"random-uuid-v4": "^0.0.9",</li>
      <li>"react": "~16.9.0",</li>
      <li>"react-dom": "~16.9.0",</li>
      <li>"react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",</li>
      <li>"react-native-easy-toast": "^1.2.0",</li>
      <li>"react-native-elements": "~1.2.7",</li>
      <li>"react-native-gesture-handler": "~1.6.0",</li>
      <li>"react-native-keyboard-aware-scroll-view": "^0.9.1",</li>
      <li>"react-native-maps": "~0.26.1",</li>
      <li>"react-native-reanimated": "~1.7.0",</li>
      <li>"react-native-safe-area-context": "0.7.3",</li>
      <li>"react-native-screens": "~2.2.0",</li>
      <li>"react-native-web": "~0.11.7"</li>
      </ul>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
