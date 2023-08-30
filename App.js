import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.titulo}>Autonomia De Gasto De Combustível</Text>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 10,
    backgroundColor:'#fff',
    width: 368,
    height: 700,
    borderRadius: 20,
  },
  titulo:{
    fontSize: 20,
    color:'#000000',
    textAlign:'center',
  },
});