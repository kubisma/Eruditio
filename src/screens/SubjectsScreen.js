import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuNavigation from '../components/MenuNavigation.js';
import { theme, globalStyles } from '../theme';

// Lista przedmiotów
const SUBJECTS = [
  { id: '1', name: 'Język polski' },
  { id: '2', name: 'Matematyka' },
  { id: '3', name: 'Informatyka' },
  { id: '4', name: 'Język angielski' },
];

export default function SubjectsScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      
      {/* Nagłówek */}
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.textMain} />
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Przedmioty</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Lista przedmiotów */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyles.scrollContent, styles.listContainer]}>
        {SUBJECTS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.subjectItem}>
            <Text style={styles.subjectName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Dolny pasek nawigacji */}
      <MenuNavigation navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  listContainer: { 
    paddingHorizontal: theme.spacing.lg,
  },
  
  subjectItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface,
  },
  subjectName: { 
    fontFamily: theme.fonts.medium,
    fontSize: 16, 
    color: theme.colors.textMain
  },
});