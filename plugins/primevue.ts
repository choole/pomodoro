import FocusTrap from 'primevue/focustrap'
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import PrimeVue from 'primevue/config'


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.directive('focustrap', FocusTrap)
});
