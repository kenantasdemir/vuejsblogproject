
import { createApp } from 'vue';
import router from './routes'; // Yukarıdaki rota tanımının olduğu dosyayı burada import edin
import App from './App.vue';

// const app = createApp(App);
// app.use(router); // Router'ı kullanmak için uygulamaya ekleyin
// app.mount('#app');


createApp(App).use(router).mount("#app")

