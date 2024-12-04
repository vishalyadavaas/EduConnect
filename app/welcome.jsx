import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme';



const Welcome = () => {
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <Image style={styles.welcomeIamge} resizeMode='contain' source={require('../assets/images/welcome.png')} />

        <View style={{gap:20}}>
            <Text style={styles.title}>EduConnect!</Text>
            <Text style={styles.punchline}>Where every thought finds a home and every tells a story.</Text>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: wp(4),
  },
  welcomeIamge: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4), 
    fontWeight: theme.fonts.extrabold, 
    textAlign: 'center',
  },
  punchline: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.7),
    paddingHorizontal: wp(10),
  }

});
