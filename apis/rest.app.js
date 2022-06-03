import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import { CookieStorage } from "cookie-storage";
import rest from "@feathersjs/rest-client";
import Axios from "axios";
import services from "./services.json";

/**
 * CookieStorage
 * @type {CookieStorage}
 */

export const cookieStorage = new CookieStorage();

const restClient = rest(process.env.baseUrl);

export const authCookieName = process.env.cookieName;

/**
 * Feathers application
 */

const restApp = feathers();

restApp.configure(restClient.axios(Axios));

restApp.configure(
  auth({
    path: services.authentication,
    cookie: authCookieName,
    storageKey: authCookieName,
    storage: cookieStorage,
  })
);

export default restApp;

export const uploadService = restApp.service(services.upload);
export const userService = restApp.service(services.user);
export const authenticatePhoneService = restApp.service(
  services.authenticatePhone
);
export const activeJobsService = restApp.service(services.activeJobs);
export const employeeRequestService = restApp.service(services.employeeRequest);
export const employeeRequestApplicationService = restApp.service(
  services.employeeRequestApplication
);
export const notificationService = restApp.service(services.notification);
export const bannerService = restApp.service(services.banner);
export const masterJobService = restApp.service(services.masterJob);
export const blogService = restApp.service(services.blog);
export const masterService = restApp.service(services.master);

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("uri[]", file);
  return uploadService.create(formData);
};

/**
 *
 * post       - userService.create({data})
 * get one    - userService.get(id , {query: { query to filter}})
 * get all    - userService.find({query: { query to filter}})
 * patch      - userService.patch(id , {data},{query: { query to filter}} )
 * delete     - userService.remove(id,{query: { query to filter}}}
 *
 */
