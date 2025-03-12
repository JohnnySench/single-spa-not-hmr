import { registerApplication, start } from "single-spa";
import {
    constructApplications,
    constructRoutes,
    constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html?raw";
import {CartService} from './services'

const cartService = new CartService();
const routes = constructRoutes(microfrontendLayout);

const applications = constructApplications({
    routes,
    loadApp(app) {
        return import(/* @vite-ignore */ app.name);
    },
});

const appsRoute = {
    '@mf/app-vue': '/vue',
    '@mf/app-vue2': '/other',
}

applications.forEach(app => {
    registerApplication({
        name: app.name,
        app: app.app,
        activeWhen: app.activeWhen,
        customProps: {
            route: appsRoute[app.name as keyof typeof appsRoute],
            cartService,
        }
    });
});

const layoutEngine = constructLayoutEngine({ routes, applications });
layoutEngine.activate();

start();
