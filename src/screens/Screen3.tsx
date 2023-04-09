import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any> {}

export const Screen3 = ({navigation}: Props) => {
  return (
    <View style={styles.main}>
      <Text>Screen 3</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
