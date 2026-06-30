import bcrypt from "bcrypt";

import { db } from "@/config/firebase";
import { LoginParams, RegisterParams } from "@/types";
import { generateToken } from "@/utils/auth/jwt";

export const login = async (data : LoginParams) => {
    let userDoc;

    if (data.email) {
        const snapshot = await db
            .collection("users")
            .where("email", "==", data.email)
            .limit(1)
            .get();

        userDoc = snapshot.docs[0];
    } else if (data.username) {
        const snapshot = await db
            .collection("users")
            .where("username", "==", data.username)
            .limit(1)
            .get();
        
        userDoc = snapshot.docs[0];
    }

    if (!userDoc) {
        throw new Error("USER_NOT_FOUND");
    }

    const user = userDoc.data();
    const isValid = await bcrypt.compare(data.password, user.password);

    if (!isValid) {
        throw new Error("INVALID_PASSWORD");
    }

    const token = generateToken({
        uid: user.uid,
        username: user.username,
        email: user.email,
    });

    return { user, token };
};
