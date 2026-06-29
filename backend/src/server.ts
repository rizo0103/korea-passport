import cloudinary from "./config/cloudinary";

async function start() {
    try {
        const result = await cloudinary.api.ping();

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

start();
