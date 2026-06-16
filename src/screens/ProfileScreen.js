import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuNavigation from '../components/MenuNavigation';
import { theme, globalStyles } from '../theme';

// Dane
const PROFILE_DATA = {
  avatar: require('../assets/profile-placeholder.png'), 
  firstName: 'Jan',
  lastName: 'Kowalski',
  email: 'jan.kowalski@strona.com',
  phone: '678-345-645',
  password: '••••••',
};

export default function ProfileScreen({ navigation }) {

  const ProfileField = ({ label, value, hasEditIcon }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          editable={false}
        />
        {hasEditIcon && (
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil-outline" size={20} color={theme.colors.textMain} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      
      {/* Nagłówek */}
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.textMain} />
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Profil</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyles.scrollContent, styles.content]}>
        
        {/* Zdjęcie profilowe */}
        <View style={styles.avatarContainer}>
          <Image source={PROFILE_DATA.avatar} style={styles.avatar} />
        </View>

        {/* Pola formularza */}
        <ProfileField label="Imię:" value={PROFILE_DATA.firstName} />
        <ProfileField label="Nazwisko:" value={PROFILE_DATA.lastName} />
        
        <ProfileField label="Email:" value={PROFILE_DATA.email} hasEditIcon />
        <ProfileField label="Telefon:" value={PROFILE_DATA.phone} hasEditIcon />
        <ProfileField label="Hasło:" value={PROFILE_DATA.password} hasEditIcon />

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
  },
  
  avatarContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  fieldContainer: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.textMain,
    marginBottom: theme.spacing.micro,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  input: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: theme.colors.textMain,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  editIcon: {
    padding: 14,
  },
});