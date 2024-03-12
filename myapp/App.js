
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0)
  const [multi, setmulti] = useState(0)
  const [num, setnum] = useState(0)
  function increament(){
    setCounter(counter+1)
  }
  function decreament(){
    setCounter(counter-1)
  }
  function handleclick(){
    alert("hey")
  }
  function multiplier(){
    setmulti(multi=>multi+5)
    setnum(num+1)
  }
  return (
    <View style={styles.container}>
      <Text>Hi Jasmita!</Text>
      <Text>Counter= {counter}</Text>
      <StatusBar style="auto" />
      <Button style={styles.button} title="up" onPress={increament} color={'green'}></Button>
      <Button title="down" onPress={decreament} color={'red'}></Button>
      <Button title='Click me!' onPress={handleclick} color={'black'}></Button>
      <Text>{multi}</Text>
      <Button title="add" onPress={multiplier}></Button>
      <Text>you clicked {num} times</Text>
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
  button:{

    marginBottom: '10px'
  }
});
