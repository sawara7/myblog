<template>
  <v-container>
    <v-row
      justify="center"        
    >
      <v-col
        md="12"
        lg="10"
        xl="10"
      >
        <v-text-field
          v-model="article.title"
          :rules="rules"
          counter="25"
          label="title"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      justify="center"        
    >
      <v-col
        md="12"
        lg="10"
        xl="10"
      >
        <v-text-field
          v-model="article.date"
          :rules="rules"
          counter="25"
          label="date"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      justify="center"        
    >
      <v-col
        md="12"
        lg="10"
        xl="10"
      >
        <v-text-field
          height="400"
          v-model="article.contents"
          :rules="rules"
          counter="500"
          label="Content"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      justify="center"        
    >
      <v-col
        md="12"
        lg="10"
        xl="10"
      >
      <div class="text-center">
        <v-btn
         x-large
         @click.native="save"
        >
        Save
        </v-btn>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import marked from "marked";
export default {
    data() {
        let d = new Date();
        return {
            id : 0,
            isNewArticle : false,
            article : {
              title    : 'titles',
              contents : 'contetnsss',
              date     : String(d.getFullYear()) + '/' + String(d.getMonth() + 1) + '/' + String(d.getDate())
            },
            rules: [v => v.length <= 500 || 'Max 25 characters']
        };
    },
    methods: {
        save: function() {
          let aRef = firebase.database().ref('articles/');
          if (this.isNewArticle){
              aRef.child(String(this.id)).set(this.article);
          }else{
              aRef.child(String(this.id)).update(this.article);
          }
          this.$router.push("/" + this.id);
        }
    },
    created: function () {
      let pathID = this.$route.path.replace(/[^0-9]/g, '');
      let aRef = firebase.database().ref('articles/');
      if (pathID===''){
        this.isNewArticle = true;
        aRef.on("value", (value) => {this.id = Object.keys(value.val()).length});
      }else{
        this.id = pathID;
        aRef.child(this.id).on("value", (value) => {
          this.article = value.val()});
      }
  }
}
</script>

<style lang="scss" scoped>
.myclass1 {
    letter-spacing  :  .3em;
    line-height     : 1.5em;
}
</style>