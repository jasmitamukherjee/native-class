
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0)
  const [multi, setmulti] = useState(0)
  const [num, setnum] = useState(0)
  const [items, setitems] = useState([
    {key:1,item:'Item 1'},
    {key:2,item:'Item 2'},
    {key:3,item:'Item 3'},
    {key:4,item:'Item 4'},
    {key:5,item:'Item 5'},
    {key:6,item:'Item 6'},
    {key:7,item:'Item 7'},
    {key:8,item:'Item 8'},
    {key:9,item:'Item 9'},
    {key:10,item:'Item 10'},
    {key:11,item:'Item 11'},
    {key:12,item:'Item 12'},
    {key:13,item:'Item 13'},
    {key:14,item:'Item 14'},
    {key:15,item:'Item 15'},
    {key:16,item:'Item 16'},
    {key:17,item:'Item 17'},
    {key:18,item:'Item 18'},
    {key:19,item:'Item 19'},


   
  ])
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
    <ScrollView>
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

      <View>{items.map((item) => {
        return (
          <Text style={styles.items}>{item.item}</Text>
        )
      })}</View>
    </View>
    </ScrollView>
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
  },
  items:{
    width : '50px',
    height :'40px',
    backgroundColor : 'cyan'
  }
});
