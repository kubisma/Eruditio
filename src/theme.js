import { StyleSheet, Platform, StatusBar } from 'react-native';

export const theme = {
  colors: {
    primary: '#007ADA', 
    background: '#FFFFFF', 
    surface: '#EBEBEB',   
    textMain: '#3A3A3A',   
    green: '#39A744',     
    red: '#D80027',       
  },
  spacing: {
    micro: 4,           
    base: 8,            
    md: 16,
    lg: 24,
    xl: 32,
  },
  fonts: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  }
};

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight - 15 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg, 
    height: 60,
  },
  headerTitle: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 18,
    color: theme.colors.textMain, 
  },
  backButton: {
    padding: theme.spacing.micro, 
  },
  scrollContent: {
    paddingBottom: 90,
  }
});