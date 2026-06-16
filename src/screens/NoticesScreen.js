import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuNavigation from '../components/MenuNavigation.js';
import { theme, globalStyles } from '../theme';

const NOTICES = [
  { id: '1', title: 'Zaproszenie do udziału w szkolnym dniu sportu – 16 maja 2026 r.', date: '17.05.2026', content: 'Drodzy uczniowie!\nZapraszamy na Szkolny Dzień Sportu, który odbędzie się 16 maja 2026r. Czeka na Was mnóstwo emocjonujących zawodów, m.in. bieg na 100 m, turniej piłki nożnej\nZapisz się u swojego wychowawcy.' },
  { id: '2', title: 'Szkolny konkurs plastyczny „Zielona przyszłość”', date: '17.05.2026', content: 'Zachęcamy Was do udziału w szkolnym konkursie plastycznym pt. „Zielona przyszłość”. Pokażcie nam, jak wyobrażacie sobie naszą planetę za 100 lat.' },
  { id: '3', title: 'Kiermasz książek: 15-19 maja 2025 r.', date: '5.05.2026', content: 'Zapraszamy Was do wzięcia udziału w szkolnym kiermaszu książek, który odbędzie się w bibliotece. Przynieś przeczytane książki i wymień na inne.' },
];

export default function NoticesScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('unread');
  const [expandedId, setExpandedId] = useState('1');

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.textMain} />
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Ogłoszenia</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === 'unread' && styles.activeTab]} onPress={() => setActiveTab('unread')}>
          <Text style={[styles.tabText, activeTab === 'unread' && styles.activeTabText]}>Nieprzeczytane</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'read' && styles.activeTab]} onPress={() => setActiveTab('read')}>
          <Text style={[styles.tabText, activeTab === 'read' && styles.activeTabText]}>Przeczytane</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyles.scrollContent, styles.noticesScroll]}>
        {NOTICES.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <TouchableOpacity key={item.id} style={styles.noticeItem} activeOpacity={0.7} onPress={() => setExpandedId(isExpanded ? null : item.id)}>
              <View style={styles.noticeHeaderRow}>
                <Ionicons name="information-circle-outline" size={24} color={isExpanded ? theme.colors.textMain : theme.colors.primary} style={styles.infoIcon} />
                <View style={styles.titleContainer}>
                  <Text style={styles.noticeTitle}>{item.title}</Text>
                  <Text style={styles.noticeDate}>{item.date}</Text>
                </View>
                <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color={theme.colors.textMain} style={styles.chevronIcon} />
              </View>
              <View style={styles.contentContainer}>
                {isExpanded ? (
                  <Text style={styles.fullContent}>{item.content}</Text>
                ) : (
                  <Text style={styles.snippetContent} numberOfLines={2}>{item.content}</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <MenuNavigation navigation={navigation} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noticesScroll: { paddingHorizontal: 20 },
  tabsContainer: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 10, marginBottom: 20 },
  
  tab: { flex: 1, height: 44, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: theme.colors.surface, marginHorizontal: 4 },
  activeTab: { backgroundColor: theme.colors.primary },
  tabText: { 
    fontFamily: theme.fonts.medium,
    fontSize: 14, 
    color: '#666666' 
  },
  activeTabText: { 
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.background 
  },
  
  noticeItem: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: theme.colors.surface },
  noticeHeaderRow: { flexDirection: 'row', alignItems: 'flex-start' },
  infoIcon: { marginRight: 12, marginTop: 2 },
  titleContainer: { flex: 1, paddingRight: 12 },
  
  noticeTitle: { 
    fontFamily: theme.fonts.semiBold,
    fontSize: 15, 
    color: theme.colors.textMain, 
    lineHeight: 22 
  },
  noticeDate: { 
    fontFamily: theme.fonts.regular,
    fontSize: 13, 
    color: '#999999', 
    marginTop: 4 
  },
  chevronIcon: { marginTop: 2 },
  contentContainer: { paddingLeft: 36, marginTop: 12 },
  
  fullContent: { 
    fontFamily: theme.fonts.regular,
    fontSize: 14, 
    color: '#444444', 
    lineHeight: 22 
  },
  snippetContent: { 
    fontFamily: theme.fonts.regular,
    fontSize: 14, 
    color: '#666666', 
    lineHeight: 22 
  }
});