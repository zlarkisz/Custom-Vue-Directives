import { createApp } from 'vue'
import App from './App.vue'
import SwitchingColorDirective from '@/plugins/ColorDirective'
import ClickOutsideDirective from '@/plugins/ClickOutsideDirective'

const customDirectives = createApp(App)

customDirectives.use(SwitchingColorDirective)
customDirectives.use(ClickOutsideDirective)
customDirectives.mount('#app')
