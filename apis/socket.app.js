import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';
import Axios from 'axios';
import io from 'socket.io-client';
import services from './services.json';

export const authCookieName = process.env.cookieName;

/**
 * CookieStorage
 * @type {CookieStorage}
 */
export const cookieStorage = new CookieStorage();

const restClient = io(process.env.NEXT_API_HOST);

/**
 * Feathers application
 * @type {createApplication.Application<any>}
 */
const socketApp = feathers();

socketApp.configure(restClient.axios(Axios));

socketApp.configure(
    auth({
        path: services.authentication,
        cookie: authCookieName,
        storageKey: authCookieName,
        storage: cookieStorage,
    }),
);

export default socketApp;
