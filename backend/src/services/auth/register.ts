import bcrypt from "bcrypt";

import { RegisterParams } from "../../types";
import { uploadAvatar } from "../upload/uploadAvatar";
import { createUser } from "../user/createUser";
import { auth } from "@/config/firebase";

export const register = async (data: RegisterParams) => {
    const hashedPassword = await bcrypt.hash(data.password, 8);

    const userRecord = await auth.createUser({
        email: data.email,
        password: data.password,
        displayName: data.fullName,
    });

    const uid = userRecord.uid;

    const avatar = await uploadAvatar(data.avatarBuffer);
    
    const user = await createUser({
        uid,
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        password: hashedPassword,
        avatar,
    });

    return user;
};