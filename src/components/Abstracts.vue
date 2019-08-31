<template>
    <v-container fluid>
        <v-row
         justify="center"        
        >
            <v-col
             md="12"
             lg="10"
             xl="10"
            >
                <v-layout wrap> 
                    <v-flex 
                    md12 lg4 xl4
                    v-for="(a,i) in articles" 
                    :key="i"
                    class = "pa-2"
                    >
                        <v-card 
                            elevation=1
                            :to="String(i)"
                            click="">
                            <v-card-img></v-card-img>
                            <v-card-title class="headline font-weight-Bold">
                                <p class="myclass1">{{ a.title }}</p>
                            </v-card-title>
                            <v-card-text class="title font-weight-light">
                                <p class="myclass1">{{ a.date }}:{{ a.contents }}</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
        articles : {},
        width : "0",
        height : "0"
    }
  },
   created: function() {
        firebase
            .database()
            .ref("articles/")
            .once("value")
            .then(result => {
                if (result.val()) {
                    this.articles = result.val();
                }
            });
      this.width = this.$vuetify.breakpoint.width;
      this.height = this.$vuetify.breakpoint.height;
    }
};
</script>

<style lang="scss" scoped>
.myclass1 {
    letter-spacing: .3em;
    line-height: 1.5em;
}
</style>