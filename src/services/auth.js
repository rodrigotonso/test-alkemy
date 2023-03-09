import client from "../config/axiosClient";

export const authLogin = async (payload) => {
    try {
        const response = await client.post("/auth/login", payload);
        return response.data.accessToken;
    } catch (error) {
        console.log(error);
    }
};

export const getMyInfo = async (token) => {
    const response = await client.get("/auth/me", {
        headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
};
