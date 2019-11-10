<template>
  <v-app>
    <myMenuBar/>
    <myEdit/>
    <myFooter/>
  </v-app>
</template>

<script>
  import myMenuBar  from "../../components/blog/Menu.vue";
  import myEdit     from "../../components/blog/Editor.vue";
  import myFooter   from "../../components/blog/Footer.vue";

  export default{
    data() {
        return {
        };
    },
    
    components: {
      myMenuBar: myMenuBar,
      myEdit   : myEdit,
      myFooter : myFooter
      }
    };
</script>
