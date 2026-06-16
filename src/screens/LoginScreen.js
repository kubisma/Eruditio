import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { theme, globalStyles } from '../theme';

// Logowanie 
export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.content}>
        
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logoImage} 
          resizeMode="contain"
        />
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Login</Text>
          <TextInput 
            style={styles.input} 
            placeholder="jankowalski@strona.pl" 
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hasło</Text>
          <TextInput 
            style={styles.input} 
            placeholder="••••••"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
          <Text style={styles.buttonText}>Zaloguj</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: theme.spacing.xl 
  },
  logoImage: {
    width: '60%',      
    height: 150,         
    alignSelf: 'center', 
    marginBottom: 64,    
  },
  inputContainer: { 
    marginBottom: theme.spacing.lg 
  },
  label: { 
    fontFamily: theme.fonts.semiBold,
    fontSize: 14, 
    color: theme.colors.textMain, 
    marginBottom: theme.spacing.base 
  },
  input: { 
    fontFamily: theme.fonts.regular,
    backgroundColor: theme.colors.surface, 
    padding: theme.spacing.md, 
    borderRadius: theme.spacing.base, 
    color: theme.colors.textMain 
  },
  button: { 
    backgroundColor: theme.colors.primary, 
    padding: theme.spacing.md, 
    borderRadius: theme.spacing.base, 
    alignItems: 'center', 
    marginTop: theme.spacing.md 
  },
  buttonText: { 
    fontFamily: theme.fonts.bold,
    color: theme.colors.background, 
    fontSize: 16, 
  }
});