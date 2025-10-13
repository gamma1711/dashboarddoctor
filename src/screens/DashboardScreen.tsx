import {
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  PillIcon,
  PlusIcon
} from '@/components/Icons';
import { Colors } from '@/constants/theme';
import { useRouter } from "expo-router";
import React from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// MOCK DATA (igual que tu original)
const proximaCitaData = {
  hora: '10:00 AM',
  paciente: 'Laura Pérez',
  detalles: '21 años, M',
  motivo: '',
};

const siguientesCitasData = [
  { id: '1', type: 'prescription', icon: <PillIcon color="#06B6D4" width={24} height={24} />, title: 'Elena Torres', subtitle: 'Metformina 850mg', details: 'Solicitad por Jared A. Garcia', action: null },
  { id: '2', type: 'approval', icon: <PlusIcon color="#6366F1" width={24} height={24} />, title: 'Elena Torres', subtitle: 'Revisión de resultados', action: { label: 'Revisar y Aprobar', color: Colors.light.primary } },
  { id: '3', type: 'message', icon: <PlusIcon color="#F59E0B" width={24} height={24} />, title: '11:00 - Carlos Mendoza', subtitle: 'Consulta general', details: 'Mensajon Ruevos: 3 Mensajes sin leer', action: { label: 'Revisar y Aprobar', color: Colors.light.primary } },
];

const DashboardSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ResumenDia: React.FC = () => (
  <View style={styles.resumenCard}>
    <View style={styles.statSection}>
      <Text style={styles.statNumber}>8</Text>
      <Text style={styles.statLabel}>Pacientes para hoy</Text>
    </View>
    <View style={styles.statSection}>
      <Text style={styles.statNumber}>4</Text>
      <Text style={styles.statLabel}>Solicitudes mensajes pendientes</Text>
    </View>
  </View>
);

const ProximaCitaCard: React.FC<{ data: typeof proximaCitaData }> = ({ data }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.iconContainer}>
        <PlusIcon color={Colors.light.primary} width={24} height={24} />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.cardSubtitle}>Próxima Cita</Text>
        <Text style={styles.cardTitle}>{data.hora} - {data.paciente}</Text>
        <Text style={styles.cardSubtitle}>{data.detalles}</Text>
      </View>
    </View>
    <View style={styles.cardBody}>
      <Text style={styles.motivoText}>Motivo: {data.motivo}</Text>
      <TouchableOpacity style={styles.primaryButton} onPress={() => Alert.alert('Iniciar consulta')}>
        <Text style={styles.primaryButtonText}>Iniciar Consulta</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CitaItem: React.FC<{ item: typeof siguientesCitasData[0] }> = ({ item }) => (
  <View style={[styles.card, styles.citaItemCard]}>
    <View style={styles.iconContainer}>{item.icon}</View>
    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      {item.details && <Text style={[styles.cardSubtitle, { color: item.type === 'message' ? '#F59E0B' : Colors.light.grey }]}>{item.details}</Text>}
    </View>
    {item.action && (
      <TouchableOpacity style={[styles.secondaryButton, { backgroundColor: item.action.color }]}>
        <Text style={styles.secondaryButtonText}>{item.action.label}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const Dashboard = () => {
  const router = useRouter();

  // función de depuración para ver tamaños
  const handleLayout = (event: any) => {
    const { width, height, x, y } = event.nativeEvent.layout;
    // puedes comentar el alert y usar console.log si prefieres
    console.log('Layout ScrollView contenedor:', { width, height, x, y });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScrollView
        onLayout={handleLayout}
        contentContainerStyle={{ ...styles.container, flexGrow: 1 }} // <-- flexGrow importante
        showsVerticalScrollIndicator
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        <DashboardSection title="Resumen del Día">
          <ResumenDia />
        </DashboardSection>

        <DashboardSection title="Agenda de Hoy">
          <ProximaCitaCard data={proximaCitaData} />
        </DashboardSection>

        <DashboardSection title="Siguientes Citas">
          {siguientesCitasData.map(item => <CitaItem key={item.id} item={item} />)}
          <TouchableOpacity>
            <Text style={styles.linkText}>Ver agenda completa</Text>
          </TouchableOpacity>
        </DashboardSection>

        <DashboardSection title="Herramientas de Acceso Rápido">
          <View style={styles.toolsContainer}>
            <TouchableOpacity style={styles.toolRow}>
              <PlusIcon width={24} height={24} color={Colors.light.primary} />
              <View style={styles.toolTextContainer}>
                <Text style={styles.toolTitle}>Mis Pacientes</Text>
                <Text style={styles.toolSubtitle}>Busca espcites, recetas y notaricat</Text>
              </View>
              <ChevronRightIcon width={20} height={20} color={Colors.light.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolRow}>
              <ClipboardDocumentListIcon width={24} height={24} color={Colors.light.primary} />
               <View style={styles.toolTextContainer}>
                <Text style={styles.toolTitle}>Gestionar Recetas</Text>
                <Text style={styles.toolSubtitle}>Crea adpenstisizs, histril y aurs ant</Text>
              </View>
              <ChevronRightIcon width={20} height={20} color={Colors.light.icon} />
            </TouchableOpacity>
          </View>
        </DashboardSection>

        {/* BLOQUE DE PRUEBA: COMENTA O QUITA DESPUÉS */}
        <View style={{ marginTop: 8 }}>
          {Array.from({ length: 18 }).map((_, i) => (
            <View key={i} style={{ padding: 12, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8 }}>
              <Text>Elemento de prueba #{i + 1}</Text>
            </View>
          ))}
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => Alert.alert('FAB pressed')}>
        <PlusIcon color="#FFFFFF" width={32} height={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 140, // espacio para FAB
    backgroundColor: '#F8F9FA',
  },
  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#343A40', marginBottom: 16 },
  resumenCard: { backgroundColor: Colors.light.white, borderRadius: 12, padding: 20, flexDirection: 'row', justifyContent: 'space-around', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  statSection: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 36, fontWeight: 'bold', color: Colors.light.primary },
  statLabel: { fontSize: 14, color: Colors.light.grey, textAlign: 'center', marginTop: 4 },
  card: { backgroundColor: Colors.light.white, borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardBody: { marginTop: 16, borderTopWidth: 1, borderTopColor: '#EEEEEE', paddingTop: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconContainer: { backgroundColor: 'rgba(74, 144, 226, 0.1)', borderRadius: 50, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: Colors.light.text },
  cardSubtitle: { fontSize: 14, color: Colors.light.grey },
  motivoText: { fontSize: 14, color: Colors.light.text, flex: 1 },
  primaryButton: { backgroundColor: Colors.light.primary, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16, marginLeft: 12 },
  primaryButtonText: { color: Colors.light.white, fontWeight: 'bold', fontSize: 14 },
  citaItemCard: { flexDirection: 'row', alignItems: 'center' },
  secondaryButton: { borderRadius: 20, paddingVertical: 8, paddingHorizontal: 12 },
  secondaryButtonText: { color: Colors.light.white, fontSize: 12, fontWeight: 'bold' },
  linkText: { color: Colors.light.primary, fontWeight: '600', textAlign: 'center', marginTop: 8 },
  toolsContainer: { borderRadius: 12, backgroundColor: Colors.light.white, overflow: 'hidden', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  toolRow: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F1F1F1' },
  toolTextContainer: { flex: 1, marginLeft: 12 },
  toolTitle: { fontSize: 16, fontWeight: '600' },
  toolSubtitle: { fontSize: 12, color: Colors.light.grey, marginTop: 2 },
  fab: { position: 'absolute', right: 24, bottom: 24, width: 60, height: 60, borderRadius: 30, backgroundColor: Colors.light.primary, justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5 },
});
