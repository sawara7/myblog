<template>
<div class="googleLogin">
  <button @click="googleLogin">Googleアカウントでログイン</button>
</div>
</template>

<script>
export default {
  name: 'googleLogin',
  data() {
    return {
      isLogin  : false,
      userData : null
    }
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  },
}
</script>

<style lang="scss">
</style>