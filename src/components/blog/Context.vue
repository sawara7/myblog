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
                <v-card 
                elevation=1
                class="pa-2">
                <div :class="{
                        'preview'  : true,
                        'myclass1' : true,
                        'display-2': $vuetify.breakpoint.smAndDown,
                        'headline': $vuetify.breakpoint.mdOnly,
                        'title': $vuetify.breakpoint.lgAndUp
                        }"
                        v-html ="preview()"
                        >
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import marked from "marked";
    export default {
        data() {
            return {
                articles :{

                }
            };
        },
        props: ['selectedID'],
        methods: {
            preview: function() {
                return (
                    marked(this.articles.title) +
                    marked(this.articles.date)  +
                    marked(this.articles.contents));
            }
        },
        created: function() {
            firebase
                .database()
                .ref("articles" + this.selectedID)
                .once("value")
                .then(result => {
                    if (result.val()) {
                        this.articles = result.val();
                    }
                });
        }
    }
</script>

<style lang="scss" scoped>
.myclass1 {
    letter-spacing  :  .2em;
    line-height     : 1.5em;
}
</style>