import React from 'react';
import { Text, View , Image } from 'react-native';
import { styles } from './styles';
const  IM= require ("./assets/cute-cat.gif");

const FSc2 = () => {
  
    return(
<View style={styles.container}> 
   <Text style={styles.tt}>yippie</Text>
      <Image source={IM} style={styles.mm}></Image>
<View style={styles.as}></View>

   </View>
    

     

    );
}
 export default FSc2;