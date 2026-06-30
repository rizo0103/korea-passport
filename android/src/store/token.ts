import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";

export const token_storage = {
    async save(token: string) {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
    },

    async get() {
        return await SecureStore.getItemAsync(TOKEN_KEY);
    },

    async remove() {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    },
};
