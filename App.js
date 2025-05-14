import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const openingHours = "8:00 AM - 8:00 PM";
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Gayaza Market Online</Text>
      <Text style={styles.hours}>Opening Hours: {openingHours}</Text>
      <View style={styles.productCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.productImage}
        />
        <Text style={styles.productName}>Banana</Text>
        <Text style={styles.productPrice}>UGX 5,000</Text>
      </View>
      <Text style={styles.footer}>Contact us on WhatsApp: 0704664915</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40, padding: 10, backgroundColor: '#f8f8f8' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#27ae60' },
  hours: { fontSize: 16, marginBottom: 20, textAlign: 'center', color: '#555' },
  productCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  productImage: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  productName: { fontSize: 20, fontWeight: 'bold' },
  productPrice: { fontSize: 16, color: '#555', marginTop: 5 },
  footer: { marginTop: 30, textAlign: 'center', fontSize: 16, color: '#777' },
});