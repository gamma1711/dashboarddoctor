import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  UserCircleIcon,
} from "@/src/modules/doctor/components/Icons";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface NewAppointmentScreenProps {
  onNavigate: (screen: string) => void;
}

// 🔹 Componentes reutilizables

const FormSection = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Icon size={24} color="#9ca3af" />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

const InputField = ({
  label,
  placeholder,
  isRequired = false,
  keyboardType = "default",
}: {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  keyboardType?: any;
}) => (
  <View style={{ marginBottom: 16 }}>
    <Text style={styles.label}>
      {label}
      {isRequired && <Text style={{ color: "#ef4444" }}> *</Text>}
    </Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#9ca3af"
      keyboardType={keyboardType}
      style={styles.input}
    />
  </View>
);

const TextareaField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <View style={{ marginBottom: 16 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#9ca3af"
      multiline
      numberOfLines={4}
      style={[styles.input, { height: 100, textAlignVertical: "top" }]}
    />
  </View>
);

const [selectedTipoCita, setSelectedTipoCita] = useState('');

// 🔹 Pantalla principal

const NewAppointmentScreen: React.FC<NewAppointmentScreenProps> = ({
  onNavigate,
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.breadcrumb}>
          <TouchableOpacity
            onPress={() => onNavigate("calendar")}
            style={styles.breadcrumbButton}
            activeOpacity={0.7}
          >
            <ChevronLeftIcon size={16} color="#6b7280" />
            <Text style={styles.breadcrumbText}>Citas</Text>
          </TouchableOpacity>
          <ChevronRightIcon size={16} color="#9ca3af" style={{ marginHorizontal: 4 }} />
          <Text style={styles.breadcrumbActive}>Nueva Cita</Text>
        </View>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Agendar Nueva Cita</Text>
          <Text style={styles.headerEmoji}>🗓️</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          Rellena los siguientes campos para crear una nueva cita.
        </Text>
      </View>

      {/* Main content */}
      <ScrollView style={styles.formContainer}>
        <FormSection title="Información del Paciente" icon={UserCircleIcon}>
          <InputField
            label="Paciente"
            placeholder="Escribe el nombre del paciente"
            isRequired
          />
        </FormSection>

        <FormSection title="Fecha y Hora" icon={PlusIcon}>
          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <InputField
                label="Día de la Cita"
                placeholder="Seleccionar fecha"
                isRequired
              />
            </View>
            <View style={{ flex: 1 }}>
              <InputField
                label="Hora de la Cita"
                placeholder="Seleccionar hora"
                isRequired
              />
            </View>
          </View>
        </FormSection>

        <FormSection title="Detalles de la Cita" icon={PlusIcon}>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>
              Tipo de Cita <Text style={{ color: 'red' }}>*</Text>
            </Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedTipoCita}
              >
                <Picker.Item label="Seleccionar tipo" value="" />
                <Picker.Item label="Primera vez" value="primera_vez" />
                <Picker.Item label="Seguimiento" value="seguimiento" />
                <Picker.Item label="Urgencia" value="urgencia" />
                <Picker.Item label="Control de tratamiento" value="control_tratamiento" />
              </Picker>
            </View>
          </View>

          {/* Campo de texto */}
          <TextareaField
            label="Motivo de la Cita"
            placeholder="Describe brevemente el motivo de la consulta..."
          />
        </FormSection>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Agendar Cita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewAppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // bg-gray-100
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    marginBottom: 16,
  },
  breadcrumb: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  breadcrumbButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  breadcrumbText: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 4,
  },
  breadcrumbActive: {
    fontSize: 14,
    color: "#1f2937",
    fontWeight: "600",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  headerEmoji: {
    fontSize: 22,
  },
  headerSubtitle: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 4,
  },
  formContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  sectionBody: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4b5563",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: "#111827",
  },
  row: {
    flexDirection: "row",
  },
  footer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#f3f4f6",
  },
  submitButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 16,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
    labelPicker: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
