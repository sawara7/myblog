<template>
  <v-app>
    <myMenuBar/>
    <myAbstract/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../components/Menu.vue";
  import myAbstract from "../components/Abstracts.vue";
  import myFooter   from "../components/Footer.vue";

  export default{
    data() {
        return {};
    },
    components: {
      myMenuBar:  myMenuBar,
      myAbstract: myAbstract,
      myFooter:   myFooter
      }
    };
</script>
