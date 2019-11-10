<template>
  <v-app>
    <myMenuBar/>
    <myContext v-bind:selectedID="selectedID"/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../../components/blog/Menu.vue";
  import myContext  from "../../components/blog/Context.vue";
  import myFooter   from "../../components/blog/Footer.vue";

  export default{
    data () {
      return {
        selectedID : window.location.pathname,
        width : "0",
        height : "0"
      }
    },
    created () {
      this.width = this.$vuetify.breakpoint.width;
      this.height = this.$vuetify.breakpoint.height;
    },
    components: {
      myMenuBar:  myMenuBar,
      myContext:  myContext,
      myFooter:   myFooter
      }
    };
</script>
