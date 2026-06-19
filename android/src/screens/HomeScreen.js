import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Korea Passport</Text>
            <Text style={styles.subtitle}> Home Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f0f1a",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },
    subtitle: {
        marginTop: 10,
        color: "#aaa",
    },
});
