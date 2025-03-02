import { registerApplication, start } from "single-spa";
import {
    constructApplications,
    constructRoutes,
    constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html?raw";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
    routes,
    loadApp(app) {
        return System.import(app.name);
    },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();