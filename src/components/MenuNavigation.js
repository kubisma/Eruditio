import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function MenuNavigation({ navigation }) {
  const route = useRoute();

  return (
    <View style={styles.bottomNav}>
      {/* Ogłoszenia */}
      <TouchableOpacity onPress={() => navigation.navigate('Notices')}>
        <Image 
          source={
            route.name === 'Notices' 
              ? require('../assets/icons/nav-mail-active.png') 
              : require('../assets/icons/nav-mail.png')
          } 
          style={styles.navIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>

      {/* Panel nawigacyjny */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image 
          source={
            route.name === 'Home' 
              ? require('../assets/icons/nav-home-active.png') 
              : require('../assets/icons/nav-home.png')
          } 
          style={styles.navIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>

      {/* Plan zajęć */}
      <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
        <Image 
          source={
            route.name === 'Schedule' 
              ? require('../assets/icons/nav-calendar-active.png') 
              : require('../assets/icons/nav-calendar.png')
          } 
          style={styles.navIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>

      {/* Profil */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image 
          source={
            route.name === 'Profile' 
              ? require('../assets/icons/nav-user-active.png') 
              : require('../assets/icons/nav-user.png')
          } 
          style={styles.navIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingBottom: 15,
  },
  navIcon: {
    width: 26,
    height: 26,
  },
});