// app's typography values;

export const TypographyTheme = {
    "h1": {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 40,
    },
    "h2": {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 32,
    },
    "h3": {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 28,
    },
    "title": {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24,
    },
    "body": {
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: 20,
    },
    "bodySmall": {
        fontSize: 12,
        fontWeight: "normal",
        lineHeight: 16,
    },
    "caption": {
        fontSize: 12,
        fontWeight: "normal",
        lineHeight: 16,
    },
    "button": {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 20,
    }
} satisfies Record < string, { fontSize: number, fontWeight: "normal" | "bold", lineHeight: number } >;
