import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>autonomia De Gasto De Combustível</Text>
          <TextInput></TextInput>
        </View>
      </View>
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
