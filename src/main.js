import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

import LenCard from './components/ui/LenCard.vue'
import LenButton from './components/ui/LenButton.vue'
import LenDialog from './components/ui/LenDialog.vue'
import LenSpinner from './components/ui/LenSpinner.vue'

const app = createApp(App)

// 分环境处理
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
  }

app.config.devtools = true

app.use(router);
app.use(store);

app.component('len-card', LenCard);
app.component('len-button', LenButton);
app.component('len-dialog', LenDialog);
app.component('len-spinner', LenSpinner);

app.mount('#app');
