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
            id : -1,
            article : {
              title    : 'titles',
              contents : 'contetnsss',
              date     : String(d.getFullYear()) + '/' + String(d.getMonth() + 1) + '/' + String(d.getDate())
            },
            rules: [v => v.length <= 500 || 'Max 25 characters']
        };
    },
    props: ['selectedID'],
    methods: {
        preview: function() {
          if (!this.selectedID){
            this.title='';
            this.contents='';
            this.date='';
          }
          firebase.
          database().
          ref('articles/'+ "4/").
          update(this.article)
        },
        save: function() {
          if (this.id === -1){
            this.id = "5"
          }
          firebase.
          database().
          ref('articles/'+ "4/").
          update(this.article)
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