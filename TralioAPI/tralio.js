import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;


async function tralioAPI(method, payload, endpointURL) {
    const response = await fetch(`${API_URL}/${endpointURL}`, {
        method: method,
        headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
        },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
}

async function registerUser(payload) {
    const url = `${apiVersion}/users/register`;
    const register = await tralioAPI("POST", payload, url);
    return register;
}

async function loginUser(payload) {
    const url = `${apiVersion}/users/login`;
    const login = await tralioAPI("POST", payload, url);
    return login;
}

async function uploadBlog(payload) {
    const url = `${apiVersion}/posts`;
    const blog = await tralioAPI("POST", payload, url);
    return blog;
}

export default tralioAPI;
export { registerUser, loginUser, uploadBlog };