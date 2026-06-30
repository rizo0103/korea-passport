import { CreateUserParams } from "../../types";
import { db } from "@/config/firebase";

export const createUser = async (data: CreateUserParams) => {
    const user = {
        ...data,
        createdAt: Date.now(),
        stats: {
            xp: 0,
            level: 0,
        },
    };
    await db.collection("users").doc(data.uid).set(user);

    return user;
};