import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
//import React, { Component } from 'react';

//import HEADER from './src/components/Header'
//import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  return (
    
    //<HEADER titulo=""/>

    <View style={styles.container}>
      <Text>
      <Text></Text>
      <Text style={{fontWeight: "bold"}}> ESCOLA ETEC DE BARUERI</Text>
      <Text> </Text>
      </Text>
      <Text>
      <Text></Text>
      <Text style={{fontWeight: "bold"}}> Curso: Desenvolvimento de Sistema{'\n'}</Text>
      <Text> </Text>
      </Text>
      

      <Image
       style={{
         width: '100%',
         height: 350,
           
        }}
        
       source={{ 
         uri: 'https://guiadovestibulinho.com.br/wp-content/uploads/2018/09/foto-0029.jpg'
        
        }}
      />

      <Text>
      <Text></Text>
      <Text style={{fontWeight: "bold"}}>{'\n'} Aluna:</Text>
      <Text> </Text>
      </Text>

     <Text>Juliana de Melo Santos{'\n'}</Text>
     <Image
       style={{
         marginLeft: 15,
         width: 100,
         height: 100,
         borderRadius: 50,
         
        }}
       source={{
         uri: 'https://github.com/julianamelo38.png'

         
        }}

        
      />



      <View>
       <Text>
       <Text>{'\n'}{'\n'}</Text>
       <Text style={{fontWeight: "bold"}}>{'\n'} Pofessor e Coordenador do Curso de DS: Cristiano Correa</Text>
       <Text> </Text>
       </Text>
      </View>

      <View>
        <Text>
        <AntDesign name="like1" size={24} color="black"/>
        </Text>
      </View>

          

     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
