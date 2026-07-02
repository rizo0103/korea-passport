import { LoginParams, RegisterParams } from "@/types";
import { uploadAvatar } from "../upload/uploadAvatar";
import { createUser } from "../user/createUser";
import { jwtService } from "../jwt/jwt.service";
import { getUserById } from "../user/getUserById";

export const register = async (data : RegisterParams) => {
    let avatar = null;
    
    if (data.avatarBuffer) {
        avatar = await uploadAvatar(data.avatarBuffer ? data.avatarBuffer : Buffer.from([]));

        if (!avatar?.publicId || !avatar?.url) {
            throw new Error("Failed to upload avatar");
        }
    }

    const uid = crypto.randomUUID();

    const user = await createUser({
        uid,
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        avatar,
    });

    const token = jwtService.generateToken({
        uid: user.uid,
        role: "user",
    });

    return { user, token };
};

export const login = async (login : string, password : string) => {
    const user = await getUserById(login);

    if (!user) {
        throw new Error("User not found");
    }

    const token = jwtService.generateToken({
        uid: user.uid,
        role: "user",
    });

    return { user, token };
};
