import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

function Users() {
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}