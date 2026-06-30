import { API } from "../config/api";
import { tokenStorage } from "../store/token";

export interface ApiResponse < T > {
    success: boolean;
    message: string;
    data: T;
    code?: string;
};

const buildHeaders = async (isFormData : boolean) => {
    const headers : Record < string, string > = {};

    if (!isFormData) {
        headers["Content-Type"] = "application/json";
    }

    const token = await tokenStorage.get(); // changed ;)

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
};

export const apiClient = {
    async post < T > (endpoint: string, body: unknown) : Promise < ApiResponse < T > > {
        const isFormData = body instanceof FormData;

        const requestBody = isFormData 
            ? body
            : JSON.stringify(body);

        const headers = await buildHeaders(isFormData);

        const response = await fetch(
            API.BASE_URL + endpoint,
            { 
                method: "POST",
                headers,
                body: requestBody, 
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data as ApiResponse < T >;
    },
};
