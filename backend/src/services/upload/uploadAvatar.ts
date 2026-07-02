import cloudinary from "../../config/cloudinary";
import { CloudinaryFolders } from "../../constants/cloudinary";
import { UploadAvatarResult } from "../../types";

export const uploadAvatar = async(fileBuffer: Buffer) : Promise < UploadAvatarResult > => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: CloudinaryFolders.avatars
            },
            (error, result) => {
                if (error) return reject(error);

                if (!result?.secure_url || !result?.public_id) {
                    return reject(new Error("Cloudinary upload did not return url or public_id"));
                }

                return resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                });
            }
        );

        stream.end(fileBuffer);
    });
}
