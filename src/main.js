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

app.config.devtools = true

app.use(router);
app.use(store);

app.component('len-card', LenCard);
app.component('len-button', LenButton);
app.component('len-dialog', LenDialog);
app.component('len-spinner', LenSpinner);

app.mount('#app');
