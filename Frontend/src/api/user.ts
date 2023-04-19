const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const getAllUsers = async (page: number) => {
    console.log("BACKEND", BACKEND_URL)
    try {
        const url = `${BACKEND_URL}/allUsers/${page}`;
        const result = await fetch(url);
        return result.json();
    } catch (error) {
        console.log(error);

    }
}
