import { StatusBar } from 'expo-status-bar';
import { Text, View , Image, TouchableOpacity  } from 'react-native';
const  IM= require ("./assets/cute-cat.gif");
//const aw = require ("./yes");
//import {Link} from 'expo-router';
import React, {useState} from 'react';
import { styles } from './styles';
//import { useState } from 'react';

const FSc1 = ({navigation}) => {

  const [position,setPosition] = useState ({x:0 , y:0});

    const handleprees = () => {

      setPosition({x:Math.random()*150, y:Math.random()*150});


    };

  
    

 

  return (


    <View style={styles.container}>
      <Text style={styles.tt}>i'll go with u to the doctor k?</Text>
      <Image source={IM} style={styles.mm}></Image>
<View style={styles.as}>
      <TouchableOpacity onPress={() => navigation.navigate('FSc2')} style={styles.bby}>
      <Text>YES</Text>
      </TouchableOpacity >
     <TouchableOpacity onPress={handleprees} style={[styles.bbn ,{left: position.x , top: position.y}]}>
      <Text>NO</Text>
     </TouchableOpacity>
     </View>
     <StatusBar style="auto"></StatusBar>
     
    </View>

    
  );

};
export default  FSc1;
