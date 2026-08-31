import { StyleSheet } from "react-native";

import { Colors, Spacing } from "@/src/theme";

export const createWelcomeStyles = ({
    horizontalPadding,
    contentWidth,
    contentPaddingVertical,
    topGap,
    sectionGap,
    bottomMargin,
}: {
    horizontalPadding: number;
    contentWidth: number | "100%";
    contentPaddingVertical: number;
    topGap: number;
    sectionGap: number;
    bottomMargin: number;
}) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            paddingHorizontal: horizontalPadding,
        },

        content: {
            flex: 1,
            width: contentWidth,
            alignSelf: "center",
            justifyContent: "space-between",
            paddingVertical: contentPaddingVertical,
        },

        topSection: {
            alignItems: "center",
            gap: topGap,
        },

        bottomSection: {
            gap: sectionGap,
            marginTop: bottomMargin,
        },

        terms: {
            marginBottom: Spacing.md,
        },

        termsSecondary: {
            color: Colors.textSecondary,
        },

        termsAccent: {
            color: Colors.accentLight,
        },

        termsPrimary: {
            color: Colors.primaryLight,
        },
    });