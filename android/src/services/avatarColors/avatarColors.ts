import { AvatarColors } from "@/src/theme";

const hashString = (str: string) => {
    let hash = 0;

    for (let i = 0; i < str.length; ++i) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return Math.abs(hash);
}

export const getAvatarColor = (name = "??"): string => {
    if (!name) return AvatarColors[0];

    const hash = hashString(name);

    return AvatarColors[hash % AvatarColors.length];
}