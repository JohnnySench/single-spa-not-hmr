import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import router from './router'

type TProps = {
    route: string;
    [key: string]: unknown;
}

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render: () => h(App, {
            word: 'string',
        }),
    },
    handleInstance: (instance: any, props: TProps): void | Promise<void> => {
        instance.use(router(props.route))
        instance.provide('cartService', props.cartService)
    },
});

export const {bootstrap, mount, unmount} = vueLifecycles