import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon
} from '@/src/modules/doctor/components/Icons';
import { Colors } from '@/src/modules/doctor/constants/theme';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const citasPorDia: Record<string, Array<{ id: string; paciente: string; hora: string; estatus: string; motivo: string }>> = {
  '2025-10-01': [
    { id: '1', paciente: 'Laura Pérez', hora: '10:00', estatus: 'confirmada', motivo: 'dolor' },
    { id: '2', paciente: 'Carlos Mendoza', hora: '11:00', estatus: 'programada', motivo: 'dolor' },
  ],
  '2025-10-13': [
    { id: '3', paciente: 'Elena Torres', hora: '09:00', estatus: 'confirmada', motivo: 'dolor' },
    { id: '4', paciente: 'Juan García', hora: '10:30', estatus: 'programada', motivo: 'dolor' },
    { id: '5', paciente: 'María López', hora: '14:00', estatus: 'cancelada', motivo: 'dolor' },
  ],
  '2025-10-15': [
    { id: '6', paciente: 'Pedro Sánchez', hora: '11:00', estatus: 'completada', motivo: 'dolor' },
  ],
};

const Calendar: React.FC = ({ navigation }: any) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // Octubre 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 13));
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayNames = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];
  const dayNamesFull = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());

    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getWeekRange = (date: Date) => {
    const weekDays = getWeekDays(date);
    const start = weekDays[0].getDate();
    const end = weekDays[6].getDate();
    const startMonth = monthNames[weekDays[0].getMonth()].substring(0, 3);
    const endMonth = monthNames[weekDays[6].getMonth()].substring(0, 3);

    return `Semana del ${start} ${startMonth} al ${end} ${endMonth}`;
  };

  const getCitasForDate = (date: Date | null) => {
    if (!date) return [];
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return citasPorDia[dateKey] || [];
  };

  const getStatusColor = (estatus: string) => {
    switch (estatus) {
      case 'programada': return Colors.light.primary;
      case 'confirmada': return '#10B981';
      case 'completada': return Colors.light.grey;
      case 'cancelada': return '#EF4444';
      default: return Colors.light.grey;
    }
  };

  const getStatusLabel = (estatus: string) => {
    switch (estatus) {
      case 'programada': return 'Programada';
      case 'confirmada': return 'Confirmada';
      case 'completada': return 'Completada';
      case 'cancelada': return 'Cancelada';
      default: return estatus;
    }
  };

  const hasAppointments = (date: Date | null) => {
    return getCitasForDate(date).length > 0;
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  };

  const isToday = (date: Date) => {
    const today = new Date(2025, 9, 13); // Simulated current date
    return isSameDay(date, today);
  };

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  const changeWeek = (delta: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + (delta * 7));
    setSelectedDate(newDate);
    setCurrentDate(newDate);
  };

  const renderMonthView = () => {
    const days = getDaysInMonth(currentDate);

    return (
      <View>
        <View style={styles.calendarGrid}>
          {dayNames.map((day, index) => (
            <View key={index} style={styles.dayHeader}>
              <Text style={styles.dayHeaderText}>{day}</Text>
            </View>
          ))}
          {days.map((day, index) => {
            if (!day) {
              return <View key={`empty-${index}`} style={styles.dayCell} />;
            }

            const isSelected = isSameDay(day, selectedDate);
            const isCurrentDay = isToday(day);
            const hasCitas = hasAppointments(day);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayCell,
                  isSelected && styles.selectedDay,
                  isCurrentDay && !isSelected && styles.todayCell,
                ]}
                onPress={() => setSelectedDate(day)}
              >
                <Text style={[
                  styles.dayText,
                  isSelected && styles.selectedDayText,
                  isCurrentDay && !isSelected && styles.todayText,
                ]}>
                  {day.getDate()}
                </Text>
                {hasCitas && (
                  <View style={[styles.appointmentDot, isSelected && { backgroundColor: Colors.light.white }]} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderWeekView = () => {
    const weekDays = getWeekDays(selectedDate);

    return (
      <View style={styles.weekContainer}>
        {weekDays.map((day, index) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentDay = isToday(day);
          const citas = getCitasForDate(day);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.weekDayCell,
                isSelected && styles.selectedWeekDay,
              ]}
              onPress={() => setSelectedDate(day)}
            >
              <Text style={[styles.weekDayName, isSelected && { color: Colors.light.white }]}>{dayNamesFull[index]}</Text>
              <Text style={[
                styles.weekDayNumber,
                isSelected && styles.selectedWeekDayText,
                isCurrentDay && !isSelected && { color: Colors.light.primary },
              ]}>
                {day.getDate()}
              </Text>
              <Text style={[styles.weekDayCitas, isSelected && { color: Colors.light.white }]}>
                {citas.length === 0 ? 'Sin citas' : `${citas.length} citas`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const citas = getCitasForDate(selectedDate);
  const router = useRouter();

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>

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

      <View style={styles.headerConsulta}>
        <Text style={styles.title}>Agenda de Citas</Text>

        <TouchableOpacity
          style={styles.newButton}
          activeOpacity={0.8}
          onPress={() => router.push("/doctor/dashboard/newAppointment")}
        >
          <PlusIcon size={18} color="#fff" />
          <Text style={styles.newButtonText}>Nueva cita</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >


        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <View style={styles.viewToggle}>
              <TouchableOpacity
                style={[styles.toggleButton, viewMode === 'month' && styles.toggleButtonActive]}
                onPress={() => setViewMode('month')}
              >
                <Text style={[styles.toggleButtonText, viewMode === 'month' && styles.toggleButtonTextActive]}>
                  Día
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, viewMode === 'week' && styles.toggleButtonActive]}
                onPress={() => setViewMode('week')}
              >
                <Text style={[styles.toggleButtonText, viewMode === 'week' && styles.toggleButtonTextActive]}>
                  Semana
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.monthSelector}>
              <TouchableOpacity onPress={() => viewMode === 'month' ? changeMonth(-1) : changeWeek(-1)}>
                <ChevronLeftIcon width={24} height={24} color={Colors.light.text} />
              </TouchableOpacity>
              <Text style={styles.monthTitle}>
                {viewMode === 'month'
                  ? `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                  : getWeekRange(selectedDate)
                }
              </Text>
              <TouchableOpacity onPress={() => viewMode === 'month' ? changeMonth(1) : changeWeek(1)}>
                <ChevronRightIcon width={24} height={24} color={Colors.light.text} />
              </TouchableOpacity>
            </View>
          </View>

          {viewMode === 'month' ? renderMonthView() : renderWeekView()}

          <View style={styles.legend}>
            <Text style={styles.legendTitle}>Leyenda:</Text>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: Colors.light.primary }]} />
                <Text style={styles.legendText}>Programada</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
                <Text style={styles.legendText}>Confirmada</Text>
              </View>
            </View>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: Colors.light.grey }]} />
                <Text style={styles.legendText}>Completada</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#EF4444' }]} />
                <Text style={styles.legendText}>Cancelada</Text>
              </View>
            </View>
          </View>

          <View style={styles.appointmentsList}>
            <Text style={styles.appointmentsTitle}>
              Citas del {selectedDate.getDate()} de {monthNames[selectedDate.getMonth()]}
            </Text>
            {citas.length > 0 ? (
              citas
                .sort((a, b) => a.hora.localeCompare(b.hora))
                .map((cita) => (
                  <View key={cita.id} style={styles.appointmentItem}>
                    {/* Hora */}
                    <View style={styles.appointmentTime}>
                      <Text style={styles.appointmentTimeText}>{cita.hora}</Text>
                    </View>

                    {/* Separador */}
                    <View style={styles.timeSeparator} />

                    {/* Info paciente y razón */}
                    <View style={styles.appointmentInfo}>
                      <Text style={styles.appointmentPatient}>{cita.paciente}</Text>
                      {cita.motivo && (
                        <Text style={styles.appointmentReason}>{cita.motivo}</Text>
                      )}

                      {/* Estado */}
                      <View style={styles.appointmentStatus}>
                        <View
                          style={[styles.statusDot, { backgroundColor: getStatusColor(cita.estatus) }]}
                        />
                        <Text style={[styles.statusText, { color: getStatusColor(cita.estatus) }]}>
                          {getStatusLabel(cita.estatus)}
                        </Text>
                      </View>
                    </View>

                    {/* Botón actualizar */}
                    <TouchableOpacity
                      onPress={() => router.push("/(protected)/doctor/dashboard/updateAppointment")}
                      style={styles.updateButton}
                    >
                      <PlusIcon width={20} height={20} color="#3b82f6" />
                    </TouchableOpacity>
                  </View>
                ))
            ) : (
              <Text style={styles.noCitas}>No hay citas programadas para este día</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 140,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 12 : 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  headerConsulta: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827", // text-gray-900
  },
  newButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6", // bg-blue-500
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  newButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 6,
  },
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

  // Calendar styles
  calendarContainer: {
    backgroundColor: Colors.light.white,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  calendarHeader: {
    marginBottom: 16,
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  toggleButtonActive: {
    backgroundColor: Colors.light.white,
  },
  toggleButtonText: {
    fontSize: 14,
    color: Colors.light.grey,
    fontWeight: '500',
  },
  toggleButtonTextActive: {
    color: Colors.light.text,
    fontWeight: '600',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayHeader: {
    width: `${100 / 7}%`,
    padding: 8,
    alignItems: 'center',
  },
  dayHeaderText: {
    fontSize: 12,
    color: Colors.light.grey,
    fontWeight: '600',
  },
  dayCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  selectedDay: {
    backgroundColor: Colors.light.primary,
    borderRadius: 20,
  },
  todayCell: {
    borderWidth: 2,
    borderColor: Colors.light.primary,
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  selectedDayText: {
    color: Colors.light.white,
    fontWeight: 'bold',
  },
  todayText: {
    color: Colors.light.primary,
    fontWeight: 'bold',
  },
  appointmentDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.light.primary,
    position: 'absolute',
    bottom: 8,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  selectedWeekDay: {
    backgroundColor: Colors.light.primary,
  },
  weekDayName: {
    fontSize: 10,
    color: Colors.light.grey,
    marginBottom: 4,
  },
  weekDayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 4,
  },
  selectedWeekDayText: {
    color: Colors.light.white,
  },
  weekDayCitas: {
    fontSize: 10,
    color: Colors.light.grey,
    textAlign: 'center',
  },
  legend: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  legendTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
  },
  legendRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: Colors.light.grey,
  },
  appointmentsList: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  appointmentsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 12,
  },
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  appointmentTime: {
    width: 70,
    marginRight: 12,
  },
  appointmentTimeText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentPatient: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.text,
    marginBottom: 4,
  },
  appointmentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  noCitas: {
    fontSize: 14,
    color: Colors.light.grey,
    textAlign: 'center',
    paddingVertical: 20,
  },

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
  timeSeparator: {
    width: 2,
    height: 40,
    backgroundColor: '#e5e7eb',
    borderRadius: 1,
    marginHorizontal: 8,
  },
  appointmentReason: {
    fontSize: 14,
    color: '#6b7280',
  },
  updateButton: {
    padding: 6,
    borderRadius: 999,
    marginLeft: 8,
  },
});