import React from 'react';
import {View, SafeAreaView, Text, Pressable} from 'react-native';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';

const App = () => {
  console.log(Config.ENV);
  const onPress = async () => {
    console.log('press');
    try {
      await auth().createUserWithEmailAndPassword(
        'sample@sample.com',
        'passworddayo',
      );
      console.log('success!');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <SafeAreaView>
        <Text>{Config.ENV}</Text>
        <Pressable onPress={onPress}>
          <Text>登録</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default App;
