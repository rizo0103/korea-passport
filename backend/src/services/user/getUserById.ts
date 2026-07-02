import { db } from "@/config/firebase";
import { Collections } from "@/config/firestore";
import { User } from "@/types/user";

export const getUserById = async (uid: string): Promise < User | null > => {
    const doc = await db.collection(Collections.USERS).doc(uid).get();

    if (!doc.exists) {
        return null;
    }

    return { uid, ...doc.data() } as User;
};