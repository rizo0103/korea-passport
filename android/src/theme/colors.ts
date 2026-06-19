// app's main colors;

export const Colors = {
    primary: "#004A94",
    primaryDark: "#003A6B",
    primaryLight: "#3366CC",
    accent: "#901D2F",
    background: "#121212",        // Глубокий тёмный основной фон
    surface: "#1E1E1E",           // Тёмный фон для карточек/модалок
    surfaceSecondary: "#2A2A2A",  // Чуть более светлый тёмный для выделения элементов
    border: "#333333",            // Приглушённый цвет границ, чтобы не контрастировал сильно
    success: "#4CAF50",
    warning: "#FF9800",
    error: "#F44336",
    textPrimary: "#E0E0E0",       // Светлый текст для хорошей читаемости
    textSecondary: "#A0A0A0",     // Второстепенный текст (серый)
    textDisabled: "#666666",      // Выключенный текст
} satisfies Record < string, string >;