export type CreateUserParams = {
    uid: string;
    fullName: string;
    username: string;
    email: string;
    avatar: {
        url: string;
        publicId: string;
    };
};