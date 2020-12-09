/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (



      <View style={styles.contenidor}>
        
        <View style={styles.top}>
        <Text style={styles.texto3}>   |||                           👤 </Text>
      </View>
       
          <View style={styles.seccio2}>
          <Text style={styles.texto}>Registro:</Text>
          </View>

          <View style={styles.seccio1}>
          <Text style={styles.texto2}>Nobre</Text>
            </View>

            <View style={styles.seccio1}>
            <Text style={styles.texto2}>Apellido</Text>
            </View>

            </View>
          <View style={styles.seccio33}>
          <Text style={styles.texto22}>Crear la cuenta</Text>
             </View>
          </View>
          

    );
  }
};

const styles = StyleSheet.create({

  contenidor: {

    backgroundColor:'#19656F',
    flex: 1,
    flexDirection: 'column',
    borderColor:'#19656F',
    borderWidth:1,
  },
 creditInput: 
    { backgroundColor: "#3f51b5",
     color: "#ffffff", 

 }, 
  
  top: {
    flex: 4,
    backgroundColor:'#03A6A6',
    borderColor:'#03A6A6',
    borderWidth:5,
  },
  seccio1: {
    color:'#19656F',
    flex:3,
    borderColor:'#80F2E7',
    borderWidth:1,
    backgroundColor:'#19656F',
    borderRadius:15,
    flexDirection: 'column',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 15,
    marginBottom:15 ,
    marginLeft:90 ,
    marginRight:90 ,
    //padding: 12,
    textAlign: 'right',
    
  },
  seccio2: {
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
    flex:3,
    backgroundColor:'#373737',

    flexDirection: 'column',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 0,
    marginBottom:15 ,
    marginLeft:70 ,
    marginRight:70 ,
    //padding: 12,
    textAlign: 'right',
  },



  seccio33: {
    color:'#19656F',
    flex:4,

    backgroundColor:'#373737',
    borderRadius:15,
    flexDirection: 'column',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 35,
    marginBottom:15 ,
    marginLeft:65 ,
    marginRight:65 ,
    //padding: 12,
    textAlign: 'right',
    
  },
   texto: {
    fontSize: 25,
    color:'white',
    marginTop: 5,
    textAlign: 'center',
  },
  texto22: {
    fontSize: 20,
    color:'white',
    marginTop: 15,
    textAlign: 'center',
  },
  texto3: {
    fontSize: 40,
    color:'#373737',

    textAlign: 'center',
  },
  texto2: {
    fontSize: 15,
    //color:'white',
    marginTop: 15,

    textAlign: 'center',
  },
  seccio4: {
    backgroundColor:'#373737',
    flex:1,
    fontSize: 15,
    color:'white',
    fontWeight: '200',
    margin: 4,
    padding: 12,
    textAlign: 'center',
  },
  seccio5: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccio6: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  }, 
  seccio3: {
    flex:1,
    borderColor:'black',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 40,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;
