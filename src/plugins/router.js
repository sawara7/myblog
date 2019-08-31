import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Home         from '../views/Home.vue'
import Editor       from '../views/Edit.vue'
import Article      from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/edit',
      component: Editor,
    },  
    {
      path: '/*',
      component: Article
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});