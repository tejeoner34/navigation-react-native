import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'screen1'> {}

// Una forma de acceder al objeto de navegacion del stack es a traves de las props
// por defecto, al envolver los componentes en el NavigationContainer, ya se le pasa
// esta propiedad a sus hijos

export const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.main}>
      <Text>Screen 1</Text>
      <Button title='Go to Screen 2' onPress={() => navigation.navigate('screen2')} />
      <Button title='Go to Peter' onPress={() => navigation.navigate('personScreen', {
        id: 1,
        name: 'Peter'
      })} />
    <View style={{flexDirection: 'row', gap: 10}}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('personScreen', {
        id: 2,
        name: 'John'
      })}>
        <Text style={styles.buttonText}>
          Go to John
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('personScreen', {
        id: 3,
        name: 'Maria'
      })}>
        <Text style={styles.buttonText}>
          Go to María
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
