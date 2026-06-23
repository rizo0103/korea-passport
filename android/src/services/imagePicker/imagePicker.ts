import { PickedImage } from "@/src/types/media";
import * as imagePicker from "expo-image-picker";

// Requests access to the device gallery
const requestPermission = async () : Promise < boolean > => (await imagePicker.requestMediaLibraryPermissionsAsync()).granted;

// Open the device gallery
const openGallery = async () : Promise < PickedImage | null > => {
    const result = await imagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: .8,
    });

    if (result.canceled) {
        return null;
    }

    const asset = result.assets[0];

    return {
        uri: asset.uri,
        width: asset.width,
        height: asset.height,
        fileName: asset.fileName,
    };
};

export const pickImage = async () : Promise < PickedImage | null > => {
    const hasPermission = await requestPermission();

    if (!hasPermission) {
        return null;
    }

    const asset = await openGallery();

    if (!asset) {
        return null;
    }

    return {
        uri: asset.uri,
        width: asset.width,
        height: asset.height,
        fileName: asset.fileName,
    };
};
