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

                resolve({
                    url: result?.secure_url,
                    publicId: result?.public_id,
                });
            }
        );

        stream.end(fileBuffer);
    });
}
