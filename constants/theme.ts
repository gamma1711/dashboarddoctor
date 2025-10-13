/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


// Archivo: src/constants/theme.ts

import { Platform } from 'react-native';

// Definimos nuestra paleta de colores de marca
const brandColors = {
  primary: '#4a90e2', // Nuestro azul principal
  text: '#333',
  textLight: '#ffffff',
  background: '#f4f7fa',
  white: '#ffffff',
  error: '#ff4d4d',
  errorBackground: '#FFD2D2',
  grey: '#6e7a8a',
};

// Ahora usamos esos colores para definir los temas
// La palabra 'export' es crucial para que otros archivos puedan importar 'Colors'.
export const Colors = {
  light: {
    text: brandColors.text,
    textOnPrimary: brandColors.textLight, // Texto que va sobre un fondo primario
    background: brandColors.background,
    primary: brandColors.primary,
    white: brandColors.white,
    tint: brandColors.primary, // Color de acento
    icon: brandColors.grey,
    errorText: brandColors.white,
    errorBackground: brandColors.error,
    grey: brandColors.grey,
  },
  // Podríamos definir un modo oscuro en el futuro
  dark: {
    text: brandColors.textLight,
    textOnPrimary: brandColors.text,
    background: '#151718',
    primary: brandColors.primary,
    white: brandColors.white,
    tint: brandColors.white,
    icon: '#9BA1A6',
    errorText: brandColors.white,
    errorBackground: brandColors.error,
    grey: brandColors.grey,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

