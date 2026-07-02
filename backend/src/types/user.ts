export interface User {
    uid: string;

    fullName: string;
    username: string;
    email: string;

    avatar?: {
        url: string;
        publicId: string;
    } | null;

    stats?: {
        xp: number;
        level: number;
    };

    createdAt?: number | Date;
}