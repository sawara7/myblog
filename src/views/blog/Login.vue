<template>
  <v-app>
    <myMenuBar/>
    <myLogin v-on:onLogIn="onLoginProc"/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../../components/blog/Menu.vue";
  import myFooter   from "../../components/blog/Footer.vue";
  import myLogin    from "../../components/blog/GoogleLogin";

  export default{
    data() {
        return {
          isLogin : false,
          userData: null
        };
    },
    methods: {
      onLoginProc: function(){
        this.$router.push('/');
      }
    },
    components: {
      myMenuBar: myMenuBar,
      myFooter : myFooter,
      myLogin  : myLogin
      }
    };
</script>
