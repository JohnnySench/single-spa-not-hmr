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
                        title: 'App',
                        injectScript: `<script type="systemjs-importmap" src="./importmap.json"></script>`,
                    }
                }
            })
        ],
        server: {
            port: 3000
        },
    }

});