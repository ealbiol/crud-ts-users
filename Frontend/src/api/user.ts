import { IUser } from "../interfaces/User";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const getAllUsers = async (page: number) => {
    try {
        const url = `${BACKEND_URL}/allUsers/${page}`;
        const result = await fetch(url);
        return result.json();
    } catch (error) {
        console.error(error);

    }
}

export const createUser = async (user: IUser) => {
    try {
        const url = `${BACKEND_URL}/createUser`;
        const params = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };
        const result = await fetch(url, params);
        return result.json()
    } catch (error) {
        console.error(error);

    }
}

export const deleteUser = async (id: string) => {
    try {
        const url = `${BACKEND_URL}/deleteUser/${id}`;
        const params = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        };
        const result = await fetch(url, params);
        return result.json()
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (id: string, user: IUser) => {
    try {
        const url = `${BACKEND_URL}/updateUser/${id}`;
        const params = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };
        const result = await fetch(url, params);
        return result.json()
    } catch (error) {
        console.error(error);

    }
}