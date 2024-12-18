import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/base.css"
// @ts-ignore
import App from './App.vue'
import router from './router'
// @ts-ignore
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/public.less'
// @ts-ignore
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@/assets/iconfont.css'
import 'nprogress/nprogress.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')
