import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getUsers = async () => {
    try {
        return (await client.get('/users')).data;
    } catch (error) {
        console.info('>Error> ', error.message);
        return {
            success: false,
            data: [],
        }
    }
}

