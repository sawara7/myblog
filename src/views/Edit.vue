<template>
  <v-app>
    <myMenuBar/>
    <myEdit/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../components/Menu.vue";
  import myEdit     from "../components/Editor.vue";
  import myFooter   from "../components/Footer.vue";

  export default{
    data() {
        return {};
    },
    components: {
      myMenuBar: myMenuBar,
      myEdit   : myEdit,
      myFooter : myFooter
      }
    };
</script>
