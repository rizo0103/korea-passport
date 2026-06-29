import { CreateUserParams } from "../../types";

export const createUser = async (data: CreateUserParams) => {
    const user = {
        ...data,
        createdAt: new Date().toISOString(),
        stats: {
            xp: 0,
            level: 0,
        },
    };

    console.log("User created: ", user);

    return user;
};
