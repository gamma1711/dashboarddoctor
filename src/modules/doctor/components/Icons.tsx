// Icons.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HeartPulseIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 12.5h2.25l1.5-3 1.5 3h2.25"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SettingsIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CalendarIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UserPlusIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-17.25Z"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DocumentIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      stroke={props.color || "black"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChartBarIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      stroke={props.color || "black"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BloodPressureIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={props.color || "black"}
    {...props}
  >
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-3H9V9h2v4zm3 3h-2v-2h2v2zm0-3h-2V9h2v4z" />
  </Svg>
);

export const GlucoseIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3,11H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z" />
  </Svg>
);

export const ThermometerIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM12 6.75v10.5m0-10.5a3.75 3.75 0 0 0-3.75 3.75H8.25m3.75-3.75a3.75 3.75 0 0 1 3.75 3.75h.001"
    />
  </Svg>
);

// Oxígeno
export const OxygenIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="M12,2A9.5,9.5,0,0,0,2.5,11.5a9.41,9.41,0,0,0,7.2,9.15l-1.35-2.25a6.5,6.5,0,1,1,7.3,0l-1.35,2.25A9.41,9.41,0,0,0,21.5,11.5,9.5,9.5,0,0,0,12,2Z" />
  </Svg>
);

// Ritmo cardiaco
export const HeartRateIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 12.1875c0-4.0625-3.28125-7.34375-7.34375-7.34375-2.25 0-4.25 1-5.65625 2.625-1.40625-1.625-3.40625-2.625-5.65625-2.625C-0.09375 4.84375-3.375 8.125-3.375 12.1875c0 6.625 8.4375 11 12.5625 11S21.75 18.8125 21.75 12.1875z"
      transform="scale(0.8) translate(3,0)"
    />
  </Svg>
);

export const ScaleIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

// Nota / Apunte
export const NoteIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
  </Svg>
);

// Síntoma / Carita
export const SymptomIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z"
    />
  </Svg>
);

export const DragHandleIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9h16.5m-16.5 6.75h16.5"
    />
  </Svg>
);

// Icono de compartir (Share)
export const ShareIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186
         c.195.025.39.042.583.05a2.25 2.25 0 011.84 2.083
         m-1.84-2.083c.318-.08.646-.134.98-.164
         m-1.563 2.246a2.25 2.25 0 01-1.84-2.083
         2.25 2.25 0 01-2.083-1.84m2.083 1.84
         c.318.08.646.134.98.164m-2.246-1.563
         a2.25 2.25 0 01-1.84 2.083m-1.84-2.083
         c.195-.025.39-.042.583-.05a2.25 2.25 0 012.083 1.84
         m-2.083-1.84a2.25 2.25 0 001.84 2.083
         m-1.84-2.083a2.25 2.25 0 00-2.083 1.84
         m2.083 1.84c.318.08.646.134.98.164
         m-2.246-1.563a2.25 2.25 0 00-1.84 2.083
         m0-2.083a2.25 2.25 0 002.083-1.84
         m-2.083 1.84a2.25 2.25 0 011.84-2.083"
    />
  </Svg>
);

// Icono de usuario (User Circle)
export const UserCircleIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75
         a7.488 7.488 0 00-5.982 2.975m11.963 0
         a9 9 0 10-11.963 0m11.963 0
         A8.966 8.966 0 0112 21
         a8.966 8.966 0 01-5.982-2.275M15 9.75
         a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </Svg>
);

export const ClipboardDocumentListIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h.01M15 12h.01M10.5 16.5h3m-3.75 0h7.5
         a2.25 2.25 0 002.25-2.25V6.75
         a2.25 2.25 0 00-2.25-2.25H8.25
         a2.25 2.25 0 00-2.25 2.25v7.5
         a2.25 2.25 0 002.25 2.25z"
    />
  </Svg>
);

// Icono de símbolo de no (prohibido)
export const NoSymbolIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 18.364A9 9 0 005.636 5.636
         m12.728 12.728A9 9 0 015.636 5.636
         m12.728 12.728L5.636 5.636"
    />
  </Svg>
);

// Icono de más (+)
export const PlusIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </Svg>
);

// Icono de campana (notificaciones)
export const BellIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31
         A8.967 8.967 0 0118 9.75v-.7V9
         A6 6 0 006 9v.75
         a8.967 8.967 0 01-2.312 6.022
         c1.733.64 3.56 1.085 5.455 1.31
         m5.714 0a24.255 24.255 0 01-5.714 0
         m5.714 0a3 3 0 11-5.714 0"
    />
  </Svg>
);

export const ChevronRightIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </Svg>
);

// Pill
export const PillIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.53 8.47a5.25 5.25 0 00-7.06 0l-4.5 4.5a5.25 5.25 0 007.06 7.06l4.5-4.5a5.25 5.25 0 000-7.06z" />
    <Path strokeLinecap="round" strokeLinejoin="round" d="M8.47 15.53l7.06-7.06" />
  </Svg>
);

// X Mark
export const XMarkIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </Svg>
);

// Clipboard Document Plus
export const ClipboardDocumentPlusIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6
         a2.25 2.25 0 00-2.25 2.25v13.5
         A2.25 2.25 0 007.5 21h6
         a2.25 2.25 0 002.25-2.25V15
         m3 0V9m0 6h-6m6 0h-1.5
         m1.5 0v-1.5m0 1.5v-3.75"
    />
    <Path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15 12h-3m3 0h3m-3 0v-3m0 3v3" />
  </Svg>
);

export const ClipboardDocumentCheckIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25
         c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9
         M10.125 2.25h.375a9 9 0 0 1 9 9v.375
         M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5
         c0 .621.504 1.125 1.125 1.125h1.5
         a3.375 3.375 0 0 1 3.375 3.375
         M9 15l2.25 2.25L15 12"
    />
  </Svg>
);

// Chevron Left
export const ChevronLeftIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </Svg>
);

// Stethoscope
export const StethoscopeIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z
         M12.75 3.75a.75.75 0 00-1.5 0v11.25a.75.75 0 001.5 0V3.75z
         M15 18.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8.25V6a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v2.25"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8.25a2.25 2.25 0 01-2.25 2.25H3v.75a2.25 2.25 0 002.25 2.25h.75"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 8.25a2.25 2.25 0 002.25 2.25H18v.75a2.25 2.25 0 01-2.25 2.25h-.75"
    />
  </Svg>
);

export const DocumentTextIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5
         A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25
         m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25
         c0 .621.504 1.125 1.125 1.125h12.75
         c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
    <Path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6m-6-3h6" />
  </Svg>
);

// Arrow Down Tray Icon
export const ArrowDownTrayIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5
         A2.25 2.25 0 0021 18.75V16.5
         M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </Svg>


);
  
