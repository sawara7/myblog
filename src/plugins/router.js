import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Home         from '../views/blog/Home.vue'
import Editor       from '../views/blog/Edit.vue'
import Login        from '../views/blog/Login.vue'
import Article      from '../views/blog/Article.vue'
import Profile      from '../views/profile/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/edit/*',
      component: Editor,
    },
    {
      path: '/login',
      component: Login,
    },{
      path: '/profile',
      component: Profile,
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