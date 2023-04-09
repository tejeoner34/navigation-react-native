import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/appTheme';

// Otra forma de acceder al objeto de navegacion es a traves de un hook que
// nos aporta la libreria
export const Screen2 = () => {
  const navigator = useNavigation<any>();
  return (
    <View style={styles.main}>
      <Text>Screen 2</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => navigator.navigate('screen3')}
      />
    </View>
  );
};
