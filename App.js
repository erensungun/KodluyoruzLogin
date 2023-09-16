import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [email, onChangeEmail] = React.useState(null);
  const [text, onChangePass] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#0F0F0F',flex:1}}>
        <StatusBar style="auto" />
      
        <View style={styles.top}>
          <View style={styles.brand}>
            <Text style={[styles.TopText, styles.color,]}>M</Text>
            <Text style={styles.TopText}>ovie</Text>
            <Text style={[styles.TopText, styles.color,]}> A</Text>
            <Text style={styles.TopText}>pp</Text>
          </View>

          <View style={styles.ls}>
            <Text style={[styles.Text, styles.Active]}>Login</Text>
            <Text style={styles.Text}>Signup</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter Email"
            placeholderTextColor="#FF7373"
            keyboardType="email-address"
          />
          <Text style={styles.Text}>Pass</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            value={text}
            placeholder="Enter Password"
            placeholderTextColor="#FF7373"
            keyboardType="default"
          />
        </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0F0F0F',
  },
  top: {
    flex: 4,
    backgroundColor: '#0F0F0F',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 6,
    backgroundColor: '#282828',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  brand:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  TopText: {
    fontSize: 40,
    fontWeight: '800',
    color: '#F6D5D5',
  },
  ls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Text: {
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 30,
    marginHorizontal: 40,
    color: '#F6D5D5',
  },
  Active: {
    fontWeight: '800',
    fontSize: 35,
    color: '#FF7373',
  },
  input: {
    height: 60,
    width: '80%',
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 35,
    color: '#F6D5D5',
    fontSize: 22,
  },
  color:{
    color:'#FF7373',
  }
});
