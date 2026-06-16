import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuNavigation from '../components/MenuNavigation';
import { theme, globalStyles } from '../theme';

// Dane
const WEEKDAYS = ['P', 'W', 'Ś', 'C', 'P', 'S', 'N'];

const CALENDAR_DAYS = [
  { day: 23, isOtherMonth: true }, { day: 24, isOtherMonth: true }, { day: 25, isOtherMonth: true }, { day: 26, isOtherMonth: true }, { day: 27, isOtherMonth: true }, { day: 1 }, { day: 2 },
  { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 },
  { day: 10, isActive: true }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 },
  { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 },
  { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 },
  { day: 31 }, { day: 1, isOtherMonth: true }, { day: 2, isOtherMonth: true }, { day: 3, isOtherMonth: true }, { day: 4, isOtherMonth: true }, { day: 5, isOtherMonth: true }, { day: 6, isOtherMonth: true },
];

const SCHEDULE_DATA = [
  { id: '1', subject: 'Język polski', room: 'Sala 111', time: '9:40 - 11:10' },
  { id: '2', subject: 'Informatyka', room: 'Sala 109', time: '12:40 - 14:10' },
  { id: '3', subject: 'Chemia', room: 'Sala 105', time: '14:40 - 16:10' },
  { id: '4', subject: 'Biologia', room: 'Sala 105', time: '16:40 - 18:10' },
];

export default function ScheduleScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      
      {/* Nagłówek */}
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.textMain} />
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Plan zajęć</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyles.scrollContent, styles.content]}>
        
        {/* Przyciski */}
        <View style={styles.monthSelector}>
          <Text style={styles.monthText}>Marzec</Text>
          <View style={styles.arrowsContainer}>
            <TouchableOpacity style={styles.arrowButton}>
              <Ionicons name="chevron-back" size={20} color={theme.colors.textMain} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton}>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.textMain} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Dni tygodnia */}
        <View style={styles.weekdaysRow}>
          {WEEKDAYS.map((day, index) => (
            <View key={index} style={styles.weekdayCell}>
              <Text style={styles.weekdayText}>{day}</Text>
            </View>
          ))}
        </View>

        {/* Siatka kalendarza */}
        <View style={styles.calendarGrid}>
          {CALENDAR_DAYS.map((item, index) => (
            <View key={index} style={styles.dayCell}>
              <View style={[
                styles.dayCircle,
                item.isActive && styles.activeDayCircle
              ]}>
                <Text style={[
                  styles.dayText,
                  item.isOtherMonth && styles.otherMonthText,
                  item.isActive && styles.activeDayText
                ]}>
                  {item.day}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Lista zajęć */}
        <View style={styles.scheduleList}>
          {SCHEDULE_DATA.map((item) => (
            <View key={item.id} style={styles.scheduleItem}>
              <Text style={styles.subjectText}>{item.subject}</Text>
              <View style={styles.timeDetails}>
                <Text style={styles.roomText}>{item.room}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* Dolny pasek nawigacji */}
      <MenuNavigation navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: 90,
  },

  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  monthText: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.textMain,
  },
  arrowsContainer: {
    flexDirection: 'row',
  },
  arrowButton: {
    paddingLeft: 16,
  },

  weekdaysRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.base,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekdayText: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 14,
    color: theme.colors.textMain,
  },

  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.xl,
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDayCircle: {
    backgroundColor: theme.colors.primary,
  },
  dayText: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: theme.colors.textMain,
  },
  otherMonthText: {
    color: '#E0E0E0',
  },
  activeDayText: {
    color: theme.colors.background,
    fontFamily: theme.fonts.semiBold,
  },

  scheduleList: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.surface,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface,
  },
  subjectText: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.textMain,
  },
  timeDetails: {
    alignItems: 'flex-end',
  },
  roomText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.textMain,
    marginBottom: 4,
  },
  timeText: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.textMain,
  },
});