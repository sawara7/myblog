import Vue        from 'vue'
import vuetify    from './plugins/vuetify'
import router     from './plugins/router'
import App        from './App.vue'

new Vue({
  el: '#app',
  router: router,
  vuetify,
  render: h => h(App)
})