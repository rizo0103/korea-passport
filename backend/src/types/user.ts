export type CreateUserParams = {
    uid: string;
    fullName: string;
    username: string;
    email: string;
    avatar: {
        url: string | undefined;
        publicId: string | undefined;
    };
};