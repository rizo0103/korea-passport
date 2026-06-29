import { RegisterParams } from "../../types";
import { uploadAvatar } from "../upload/uploadAvatar";
import { createUser } from "../user/createUser";

export const register = async (data: RegisterParams) => {
    const avatar = await uploadAvatar(data.avatarBuffer);

    const uid = crypto.randomUUID();

    const user = await createUser({
        uid,
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        avatar,
    });

    return user;
};
