<template>
  <v-app>
      <myHeader/>
      <myOrder class="container"/>
      <myCareer class="container"/>
      <mySkill class="container"/>
      <myPortfolio class="container"/>
      <myInquery class="container"/>
      <myFooter/>  
  </v-app>
</template>

<script>
  import myHeader    from "../../components/profile/Header.vue";
  import myOrder     from "../../components/profile/Order.vue";
  import myCareer    from "../../components/profile/Career.vue";
  import mySkill     from "../../components/profile/Skill.vue";
  import myPortfolio from "../../components/profile/Portfolio.vue";
  import myInquery   from "../../components/profile/Inquary.vue";
  import myFooter    from "../../components/profile/Footer.vue";

  export default{
    data () {
      return {
      }
    },
    created () {
    },
    components: {
      myHeader:     myHeader,
      myOrder:      myOrder,
      myCareer:     myCareer,
      mySkill:      mySkill,
      myPortfolio:  myPortfolio,
      myInquery:    myInquery,
      myFooter:     myFooter
      }
    };
</script>

<style scoped>
.container {
    width: 50%;
    margin: auto;
}
</style>