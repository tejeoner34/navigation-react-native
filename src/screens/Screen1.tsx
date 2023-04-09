import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any> {}

// Una forma de acceder al objeto de navegacion del stack es a traves de las props
// por defecto, al envolver los componentes en el NavigationContainer, ya se le pasa
// esta propiedad a sus hijos

export const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.main}>
      <Text>Screen 1</Text>
      <Button title='Go to Screen 2' onPress={() => navigation.navigate('screen2')} />
    </View>
  );
};
