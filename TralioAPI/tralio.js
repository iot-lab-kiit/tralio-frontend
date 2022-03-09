import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

async function tralioAPI(method, payload, endpointURL) {
    if (method === "POST") {
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
    } else if (method === "GET") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("access-token"),
            },
        });
        const data = await response.json();
        return data;
    } else if (method === "DELETE") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("access-token"),
            },
        });
        const data = await response.json();
        return data;
    } else if (method === "PUT") {
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
    } else if (method === "PATCH") {
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
}

async function registerUser(payload) {
    const url = `api/${apiVersion}/users/register`;
    const register = await tralioAPI("POST", payload, url);
    return register;
}

async function loginUser(payload) {
    const url = `api/${apiVersion}/users/login`;
    const login = await tralioAPI("POST", payload, url);
    return login;
}

async function uploadBlog(payload) {
    const url = `api/${apiVersion}/posts`;
    const blog = await tralioAPI("POST", payload, url);
    return blog;
}

async function test() {
    const url = `api/${apiVersion}/test`;
    const test = await tralioAPI("GET", null, url);
    return test;
}

async function dbStatus() {
    const url = `api/${apiVersion}/dbstatus`;
    const status = await tralioAPI("GET", null, url);
    return status;
}

export default tralioAPI;
export { registerUser, loginUser, uploadBlog, test, dbStatus };
