import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DashboardSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default DashboardSection;

const styles = StyleSheet.create({
  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#343A40', marginBottom: 16 },
});