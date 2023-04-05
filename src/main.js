import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import { createRouter, createWebHistory } from 'vue-router'
import Hello from './components/Hello.vue'
import NotFound from './components/NotFound'
import Home from './components/Home'

                const router = createRouter({
                    history : createWebHistory(),
                            routes : [
                                        {
                                        path : '/1',
                                        component: Hello
                                        },
                    
                                        {
                                            path: '/2', 
                                            component: Home
                                        },
                                        
                                        {
                                            path: '/:catchAll(.*)', // matches all routes that haven't been defined
                                            component: NotFound
                                        }
                                    
                                    ]
                                    })
         
                const app = createApp(App)
                app.use(router)
                app.mount('#app')
