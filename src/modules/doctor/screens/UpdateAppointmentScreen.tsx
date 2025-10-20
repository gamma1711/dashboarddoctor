import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
const route = useRoute();

type AppointmentStatus = 'Programada' | 'Confirmada' | 'Completada' | 'Cancelada';

const { appointment: appointmentStr, onUpdate } = route.params as { appointment: string; onUpdate: (apt: Appointment) => void };

const appointment: Appointment = JSON.parse(appointmentStr);

interface Appointment {
  id: string;
  paciente: string;
  hora: string;
  estatus: AppointmentStatus;
  fecha: string; // ej: '2025-10-19'
}

export default function UpdateAppointmentScreen() {
  
  const navigation = useNavigation();
  const route = useRoute();
  const { appointment, onUpdate } = route.params as { appointment: Appointment; onUpdate: (apt: Appointment) => void };

  const [status, setStatus] = useState<AppointmentStatus>(appointment.estatus);

  const handleSave = () => {
  onUpdate({ ...appointment, estatus: status });
  navigation.goBack();
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Cita</Text>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.value}>{appointment.paciente}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Fecha y Hora</Text>
        <Text style={styles.value}>{appointment.fecha} a las {appointment.hora}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Estado de la cita</Text>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue as AppointmentStatus)}
          style={styles.picker}
        >
          <Picker.Item label="Programada" value="Programada" />
          <Picker.Item label="Confirmada" value="Confirmada" />
          <Picker.Item label="Completada" value="Completada" />
          <Picker.Item label="Cancelada" value="Cancelada" />
        </Picker>
      </View>

      <View style={styles.buttons}>
        <Button title="Cancelar" color="#aaa" onPress={() => navigation.goBack()} />
        <Button title="Guardar Cambios" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
  infoBlock: { marginBottom: 16 },
  label: { fontSize: 14, color: '#555', marginBottom: 4 },
  value: { fontSize: 16, fontWeight: '600', color: '#111' },
  picker: { height: 50, width: '100%' },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
});
