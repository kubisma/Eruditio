import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';
import { theme, globalStyles } from '../theme';

const MENU_ITEMS = [
  { id: '1', title: 'Przedmioty', icon: require('../assets/icons/book.png'), screen: 'Subjects' },
  { id: '2', title: 'Ogłoszenia', icon: require('../assets/icons/news.png'), screen: 'Notices' },
  { id: '3', title: 'Frekwencja', icon: require('../assets/icons/chart.png') },
  { id: '4', title: 'Profil', icon: require('../assets/icons/profile.png'), screen: 'Profile' },
  { id: '5', title: 'Ustawienia', icon: require('../assets/icons/settings.png') },
  { id: '6', title: 'Plan zajęć', icon: require('../assets/icons/calendar.png'), screen: 'Schedule' },
  { id: '7', title: 'Powiadomienia', icon: require('../assets/icons/notification.png') },
  { id: '8', title: 'Kontakt', icon: require('../assets/icons/info.png') },
  { id: '9', title: 'Opłaty', icon: require('../assets/icons/wallet.png') },
  { id: '10', title: 'Wyloguj się', icon: require('../assets/icons/logout.png'), isLogout: true },
  { id: '11', title: 'Wirtualny\nspacer', icon: require('../assets/icons/location.png') },
  { id: '12', title: 'Social media', icon: require('../assets/icons/social.png') },
];

const UPCOMING_CLASSES = [
  { id: '1', subject: 'Matematyka', room: 'Sala 110', time: '9:40 - 11:10' },
  { id: '2', subject: 'Historia', room: 'Sala 109', time: '12:40 - 14:10' },
  { id: '3', subject: 'Język angielski', room: 'Sala 105', time: '14:40 - 16:10' },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContent}>
        
        {/* Górny pasek */}
        <View style={styles.header}>
          <Image source={require('../assets/icons/search.png')} style={styles.headerIcon} />
          <Text style={styles.greeting}>Witaj, Jan Kowalski</Text>
          <View>
            <Image source={require('../assets/icons/bell.png')} style={styles.headerIcon} />
            <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
          </View>
        </View>

        {/* Siatka ikon */}
        <View style={styles.grid}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card} 
              onPress={() => {
                if (item.isLogout) {
                  navigation.replace('Login');
                } else if (item.screen) {
                  navigation.navigate(item.screen);
                }
              }}
            >
              <View style={[
                styles.iconBox, 
                item.isLogout && { backgroundColor: '#E1E1E1' } 
              ]}>
                <Image 
                  source={item.icon} 
                  style={styles.icon} 
                  resizeMode="contain" 
                />
              </View>
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Nadchodzące zajęcia */}
        <View style={styles.scheduleSection}>
          <Text style={styles.sectionTitle}>Nadchodzące zajęcia</Text>
          <Text style={styles.sectionDate}>14.03.2026</Text>
          
          <View style={styles.classesList}>
            {UPCOMING_CLASSES.map((item) => (
              <View key={item.id} style={styles.classItem}>
                <Text style={styles.classSubject}>{item.subject}</Text>
                <View style={styles.classDetails}>
                  <Text style={styles.classRoom}>{item.room}</Text>
                  <Text style={styles.classTime}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <MenuNavigation navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md, 
    paddingBottom: theme.spacing.lg 
  },
  greeting: {
    fontFamily: theme.fonts.medium,
    fontSize: 18, 
    color: theme.colors.textMain 
  },
  headerIcon: { width: 24, height: 24 },
  badge: { 
    position: 'absolute', 
    top: -4, 
    right: -4, 
    backgroundColor: theme.colors.red,
    borderRadius: 10, 
    width: 16, 
    height: 16, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  badgeText: { 
    fontFamily: theme.fonts.bold,
    color: theme.colors.background, 
    fontSize: 10 
  },

  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: theme.spacing.md },
  card: { width: '33.33%', alignItems: 'center', marginBottom: theme.spacing.lg },
  iconBox: { 
    backgroundColor: '#EBF4FF',
    width: 64, 
    height: 64, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: theme.spacing.base 
  },
  icon: { width: 28, height: 28 },
  
  cardTitle: { 
    fontFamily: theme.fonts.medium,
    fontSize: 14, 
    color: theme.colors.textMain, 
    textAlign: 'center' 
  },

  scheduleSection: { paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.md },
  sectionTitle: { 
    fontFamily: theme.fonts.medium,
    fontSize: 18, 
    color: theme.colors.textMain 
  },
  sectionDate: { 
    fontFamily: theme.fonts.regular,
    fontSize: 14, 
    color: '#666', 
    marginBottom: theme.spacing.md, 
    marginTop: 4 
  },
  classesList: { borderTopWidth: 1, borderTopColor: theme.colors.surface },
  classItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: theme.spacing.md, 
    borderBottomWidth: 1, 
    borderBottomColor: theme.colors.surface 
  },
  classSubject: { 
    fontFamily: theme.fonts.semiBold,
    fontSize: 16, 
    color: theme.colors.textMain 
  },
  classDetails: { alignItems: 'flex-end' },
  classRoom: { 
    fontFamily: theme.fonts.regular, 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 4 
  },
  classTime: { 
    fontFamily: theme.fonts.regular, 
    fontSize: 14, 
    color: '#666' 
  }
});