import bcrypt from "bcrypt";

import { LoginParams, RegisterParams } from "@/types";
import { uploadAvatar } from "../upload/uploadAvatar";
import { createUser } from "../user/createUser";
import { jwtService } from "../jwt/jwt.service";
import { getUserById } from "../user/getUserById";
import { Collections } from "@/config/firestore";
import { db } from "@/config/firebase";

export const register = async (data : RegisterParams) => {
    let avatar = null;
    
    if (data.avatarBuffer) {
        avatar = await uploadAvatar(data.avatarBuffer ? data.avatarBuffer : Buffer.from([]));

        if (!avatar?.publicId || !avatar?.url) {
            throw new Error("Failed to upload avatar.");
        }
    }

    const uid = crypto.randomUUID();

    const user = await createUser({
        uid,
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        password: data.password,
        avatar,
        role: "user",
    });

    const token = jwtService.generateToken({
        uid: user.uid,
        role: user.role,
    });

    return { user, token };
};

export const login = async (login : string, password : string) => {
    const snapshot = await db.collection(Collections.USERS)
        .where("email", "==", login)
        .get();
    
    let userDoc = snapshot.docs[0];

    if (!userDoc) {
        const usernameSnapshot = await db.collection(Collections.USERS)
            .where("username", "==", login)
            .get();

        userDoc = usernameSnapshot.docs[0];
    }

    if (!userDoc) {
        throw new Error("User not found.");
    }

    const user = userDoc.data();
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password you stupid !");
    }

    const token = jwtService.generateToken({
        uid: user.uid,
        role: user.role,
    });

    return { user, token };
};
