import { defineConfig } from "vite";
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig(({command}) => {
    if (command === 'serve') {
        return {
            plugins: [
                simpleHtmlPlugin({
                    inject: {
                        data: {
                            injectScript: `
                              <script type="importmap">
                                {
                                  "imports": {
                                    "@mf/app-vue": "http://localhost:3001/src/main.ts",
                                    "@mf/app-vue2": "http://localhost:3002/src/main.ts"
                                  }
                                }
                              </script>
                            `,
                            title: 'Development',
                        }
                    }
                })
            ],
            server: {
                port: 3000
            },
        }
    }
    return {
        plugins: [
            simpleHtmlPlugin({
                inject: {
                    data: {
                        injectScript: `
                              <script type="importmap">
                                {
                                  "imports": {
                                    "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js",
                                    "@mf/app-vue": "http://localhost:3001/app-vue.js",
                                    "@mf/app-vue2": "http://localhost:3002/app-vue2.js"
                                  }
                                }
                              </script>
                            `,
                        title: 'Build',
                    }
                }
            })
        ],
        server: {
            port: 3000
        },
    }

});