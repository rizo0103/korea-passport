import { API } from "../config/api";
import { tokenStorage } from "../store/token";
import { HttpMethod } from "../types/HttpMethod";

export interface ApiResponse < T > {
    success: boolean;
    message: string;
    data: T;
    code?: string;
};

const request = async < T > (
    method: HttpMethod,
    endpoint: string,
    body?: unknown,
) : Promise < ApiResponse < T > > => {
    const token = await tokenStorage.get();
    const isFormData = body instanceof FormData;
    const headers: Record < string, string > = {};
    let requestBody: string | FormData | undefined = body as string | FormData | undefined; 

    if (!isFormData) {
        requestBody = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(API.BASE_URL + endpoint, {
        method,
        headers,
        body: requestBody,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }
    
    return data as ApiResponse < T >;
};

export const apiClient = {
    async post < T > (endpoint: string, body: unknown) : Promise < ApiResponse < T > > {
        return request("POST", endpoint, body);
    },

    async get < T > (endpoint: string) : Promise < ApiResponse < T > > {
        return request("GET", endpoint);
    },

    async put < T > (endpoint: string, body: unknown) : Promise < ApiResponse < T > > {
        return request("PUT", endpoint, body);
    },

    async patch < T > (endpoint: string, body: unknown) : Promise < ApiResponse < T > > {
        return request("PATCH", endpoint, body);
    },

    async delete < T > (endpoint: string) : Promise < ApiResponse < T > > {
        return request("DELETE", endpoint);
    }
};
