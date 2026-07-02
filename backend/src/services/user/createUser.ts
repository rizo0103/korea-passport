import { Collections } from "@/config/firestore";
import { User } from "../../types";
import { db } from "@/config/firebase";

export const createUser = async (data: User) => {
    const user : User = {
        ...data,
        createdAt: Date.now(),
        stats: {
            xp: 0,
            level: 0,
        },
    };
    
    await db.collection(Collections.USERS).doc(data.uid).set(user);

    return user satisfies User;
};