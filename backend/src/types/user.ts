export type CreateUserParams = {
    uid: string;
    fullName: string;
    username: string;
    email: string;
    password: string;
    avatar: {
        url: string | undefined;
        publicId: string | undefined;
    };
};