<template>
  <v-app>
    <myMenuBar/>
    <myLogin/>
    <myEdit/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../components/Menu.vue";
  import myEdit     from "../components/Editor.vue";
  import myFooter   from "../components/Footer.vue";
  import myLogin    from "../components/GoogleLogin";

  export default{
    data() {
        return {};
    },
    components: {
      myMenuBar: myMenuBar,
      myEdit   : myEdit,
      myFooter : myFooter,
      myLogin  : myLogin
      }
    };
</script>
