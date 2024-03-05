// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hi jasmita</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//new add :
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0)

  function increament(){
    setCounter(counter+1)
  }
  function decreament(){
    setCounter(counter-1)
  }
  return (
    <View style={styles.container}>
      <Text>Counter= {counter}</Text>
      <StatusBar style="auto" />
      <Button title="increament" onPress={increament} color={'green'}></Button>
      <Button title="decreament" onPress={decreament} color={'red'}></Button>
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
