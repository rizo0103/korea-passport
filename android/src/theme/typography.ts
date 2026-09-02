// app's typography values;

export const TypographyTheme = {
    "h1": {
        fontFamily: "comic",
        fontSize: 32,
        fontWeight: "normal",
        lineHeight: 40,
    },
    "h2": {
        fontFamily: "comic",
        fontSize: 24,
        fontWeight: "normal",
        lineHeight: 32,
    },
    "h3": {
        fontFamily: "comic",
        fontSize: 18,
        fontWeight: "normal",
        lineHeight: 28,
    },
    "title": {
        fontFamily: "comic",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 24,
    },
    "body": {
        fontFamily: "comic",
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: 20,
    },
    "bodySmall": {
        fontFamily: "readable",
        fontSize: 12,
        fontWeight: "normal",
        lineHeight: 16,
    },
    "caption": {
        fontFamily: "readable",
        fontSize: 12,
        fontWeight: "normal",
        lineHeight: 16,
    },
    "button": {
        fontFamily: "comic",
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: 20,
    }
} satisfies Record < string, { fontSize: number, fontWeight: "normal" | "normal", lineHeight: number, fontFamily: string } >;
