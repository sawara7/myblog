<template>
  <v-app>
    <myMenuBar/>
    <myAbstract v-bind:isAdmin="isAdmin"/>
    <myFooter/>
  </v-app>
</template>

<script>
import myMenuBar  from "../../components/blog/Menu.vue";
import myAbstract from "../../components/blog/Abstracts.vue";
import myFooter   from "../../components/blog/Footer.vue";

export default {
  data() {
      return {
        isAdmin : false
      };
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        let aRef = firebase.database().ref('admin-uid/' + user.uid);
        aRef.on("value", (value) => {if(value.val()===true){this.isAdmin=true}});
      }
    });
  },
  components: {
    myMenuBar:  myMenuBar,
    myAbstract: myAbstract,
    myFooter:   myFooter
  }
};
</script>
