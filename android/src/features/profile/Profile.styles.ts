import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/src/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing["2xl"],

        gap: Spacing.md,
    },

    header: {
        gap: Spacing.xs,

        marginBottom: Spacing.sm,
    },

    profileSection: {
        alignItems: "center",
        justifyContent: "center",

        gap: Spacing.md,

        paddingVertical: Spacing.md,
    },

    userInfo: {
        alignItems: "center",

        gap: Spacing.xs,
    },

    cardHeader: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        gap: Spacing.md,
    },

    statistics: {
        flexDirection: "row",

        alignItems: "stretch",

        gap: Spacing.sm,
    },

    statCard: {
        flex: 1,

        margin: 0,

        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.sm,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.lg,
    },

    progressRow: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        marginTop: Spacing.sm,
    },

    logoutSection: {
        marginTop: Spacing.md,

        paddingTop: Spacing.md,

        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
});