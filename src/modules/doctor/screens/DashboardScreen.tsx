import {
  BellIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  PillIcon,
  PlusIcon
} from '@/src/modules/doctor/components/Icons';
import { Colors } from '@/src/modules/doctor/constants/theme';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Alert, Modal, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendar from '../components/Calendar';
import DashboardSection from '../components/DashboardSection';

// MOCK DATA para citas por día
const citasPorDia: Record<string, Array<{ id: string; paciente: string; hora: string; estatus: string }>> = {
  '2025-10-01': [
    { id: '1', paciente: 'Laura Pérez', hora: '10:00', estatus: 'confirmada' },
    { id: '2', paciente: 'Carlos Mendoza', hora: '11:00', estatus: 'programada' },
  ],
  '2025-10-13': [
    { id: '3', paciente: 'Elena Torres', hora: '09:00', estatus: 'confirmada' },
    { id: '4', paciente: 'Juan García', hora: '10:30', estatus: 'programada' },
    { id: '5', paciente: 'María López', hora: '14:00', estatus: 'cancelada' },
  ],
  '2025-10-15': [
    { id: '6', paciente: 'Pedro Sánchez', hora: '11:00', estatus: 'completada' },
  ],
};

const proximaCitaData = {
  hora: '10:00 AM',
  paciente: 'Laura Pérez',
  detalles: '21 años, M',
  motivo: 'Consulta general',
};

const siguientesCitasData = [
  { id: '1', type: 'prescription', icon: <PillIcon color="#06B6D4" width={24} height={24} />, title: 'Elena Torres', subtitle: 'Metformina 850mg', details: 'Solicitad por Jared A. Garcia', action: null },
  { id: '2', type: 'approval', icon: <PlusIcon color="#6366F1" width={24} height={24} />, title: 'Elena Torres', subtitle: 'Revisión de resultados', action: { label: 'Revisar y Aprobar', color: Colors.light.primary } },
  { id: '3', type: 'message', icon: <PlusIcon color="#F59E0B" width={24} height={24} />, title: '11:00 - Carlos Mendoza', subtitle: 'Consulta general', details: 'Mensajes Nuevos: 3 Mensajes sin leer', action: { label: 'Revisar y Aprobar', color: Colors.light.primary } },
];

const ResumenDia: React.FC = () => (
  <View style={styles.resumenCard}>
    <View style={styles.statSection}>
      <Text style={styles.statNumber}>8</Text>
      <Text style={styles.statLabel}>Pacientes para hoy</Text>
    </View>
    <View style={styles.statSection}>
      <Text style={styles.statNumber}>4</Text>
      <Text style={styles.statLabel}>Pacientes atendidos</Text>
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

// Componente del Calendario

const Dashboard = () => {
  const router = useRouter();
  const [fabMenuOpen, setFabMenuOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.primary }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.light.primary} />
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Bienvenido, Dr. Acosta</Text>
          <Text style={styles.headerSubtitle}>Jueves, 26 de Septiembre</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <BellIcon width={24} height={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>DA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
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
            <TouchableOpacity 
              style={styles.toolRow}
              onPress={() => setCalendarModalOpen(true)}
            >
              <View style={styles.calendarIconContainer}>
                <CalendarIcon width={24} height={24} color={Colors.light.primary} />
              </View>
              <View style={styles.toolTextContainer}>
                <Text style={styles.toolTitle}>Calendario Completo</Text>
                <Text style={styles.toolSubtitle}>Ver todas las citas y eventos</Text>
              </View>
              <ChevronRightIcon width={20} height={20} color={Colors.light.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolRow}>
              <View style={styles.patientsIconContainer}>
                <PlusIcon width={24} height={24} color="#6366F1" />
              </View>
              <View style={styles.toolTextContainer}>
                <Text style={styles.toolTitle}>Mis Pacientes</Text>
                <Text style={styles.toolSubtitle}>Busca expedientes, recetas y notificaciones</Text>
              </View>
              <ChevronRightIcon width={20} height={20} color={Colors.light.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolRow}>
              <ClipboardDocumentListIcon width={24} height={24} color={Colors.light.primary} />
               <View style={styles.toolTextContainer}>
                <Text style={styles.toolTitle}>Gestionar Recetas</Text>
                <Text style={styles.toolSubtitle}>Crea, administra, historial y autoriza</Text>
              </View>
              <ChevronRightIcon width={20} height={20} color={Colors.light.icon} />
            </TouchableOpacity>
          </View>
        </DashboardSection>
      </ScrollView>

      {/* Calendar Modal */}
      <Modal
        visible={calendarModalOpen}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setCalendarModalOpen(false)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setCalendarModalOpen(false)}>
              <ChevronLeftIcon width={24} height={24} color={Colors.light.text} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Calendario Completo</Text>
            <View style={{ width: 24 }} />
          </View>
          <ScrollView style={{ flex: 1, padding: 16 }}>
            <Calendar />
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* FAB Menu */}
      {fabMenuOpen && (
        <View style={styles.fabMenu}>
          <TouchableOpacity 
            style={styles.fabMenuItem}
            onPress={() => {
              setFabMenuOpen(false);
              Alert.alert('Iniciar Consulta');
            }}
          >
            <Text style={styles.fabMenuText}>Iniciar Consulta</Text>
            <View style={styles.fabMenuIcon}>
              <PlusIcon color="#FFF" width={20} height={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.fabMenuItem}
            onPress={() => {
              setFabMenuOpen(false);
              Alert.alert('Agendar Nueva Cita');
            }}
          >
            <Text style={styles.fabMenuText}>Agendar Nueva Cita</Text>
            <View style={styles.fabMenuIcon}>
              <CalendarIcon color="#FFF" width={20} height={20} />
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* FAB */}
      <TouchableOpacity 
        style={[styles.fab, fabMenuOpen && styles.fabActive]} 
        onPress={() => setFabMenuOpen(!fabMenuOpen)}
      >
        {fabMenuOpen ? (
          <Text style={{ color: '#FFF', fontSize: 32, fontWeight: 'bold', lineHeight: 32 }}>×</Text>
        ) : (
          <PlusIcon color="#FFFFFF" width={32} height={32} />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  // Header styles
  header: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 12 : 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#34D399',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // Container styles
  container: {
    padding: 16,
    paddingBottom: 140,
    backgroundColor: '#F8F9FA',
  },
  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#343A40', marginBottom: 16 },
  
  // Resumen card
  resumenCard: { 
    backgroundColor: Colors.light.white, 
    borderRadius: 12, 
    padding: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 10 
  },
  statSection: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 36, fontWeight: 'bold', color: Colors.light.primary },
  statLabel: { fontSize: 14, color: Colors.light.grey, textAlign: 'center', marginTop: 4 },
  
  // Card styles
  card: { 
    backgroundColor: Colors.light.white, 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 12, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 10 
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardBody: { 
    marginTop: 16, 
    borderTopWidth: 1, 
    borderTopColor: '#EEEEEE', 
    paddingTop: 16, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  iconContainer: { 
    backgroundColor: 'rgba(74, 144, 226, 0.1)', 
    borderRadius: 50, 
    width: 44, 
    height: 44, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: Colors.light.text },
  cardSubtitle: { fontSize: 14, color: Colors.light.grey },
  motivoText: { fontSize: 14, color: Colors.light.text, flex: 1 },
  primaryButton: { 
    backgroundColor: Colors.light.primary, 
    borderRadius: 20, 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    marginLeft: 12 
  },
  primaryButtonText: { color: Colors.light.white, fontWeight: 'bold', fontSize: 14 },
  citaItemCard: { flexDirection: 'row', alignItems: 'center' },
  secondaryButton: { borderRadius: 20, paddingVertical: 8, paddingHorizontal: 12 },
  secondaryButtonText: { color: Colors.light.white, fontSize: 12, fontWeight: 'bold' },
  linkText: { color: Colors.light.primary, fontWeight: '600', textAlign: 'center', marginTop: 8 },
  
  // Tools styles
  toolsContainer: { 
    borderRadius: 12, 
    backgroundColor: Colors.light.white, 
    overflow: 'hidden', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 10 
  },
  toolRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F1F1' 
  },
  toolTextContainer: { flex: 1, marginLeft: 12 },
  toolTitle: { fontSize: 16, fontWeight: '600' },
  toolSubtitle: { fontSize: 12, color: Colors.light.grey, marginTop: 2 },
  
  // FAB styles
  fab: { 
    position: 'absolute', 
    right: 24, 
    bottom: 24, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: Colors.light.primary, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 8, 
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowRadius: 5 
  },
  fabActive: {
    backgroundColor: '#EF4444',
  },
  fabMenu: {
    position: 'absolute',
    right: 24,
    bottom: 100,
    backgroundColor: Colors.light.white,
    borderRadius: 12,
    padding: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    minWidth: 200,
  },
  fabMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  fabMenuText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginRight: 12,
  },
  fabMenuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Modal styles
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.light.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  calendarIconContainer: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconContainer: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentIconContainer: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patientsIconContainer: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});