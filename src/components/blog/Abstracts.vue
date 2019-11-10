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
                        >
                        <v-card 
                            elevation=0
                            :to="String(i)"
                            click=""
                            >
                            <v-card-title class="font-weight-Bold">
                                <p :class="{
                                    'myclass1' : true,
                                    'display-4': $vuetify.breakpoint.smAndDown,
                                    'display-2': $vuetify.breakpoint.mdOnly,
                                    'headline': $vuetify.breakpoint.lgAndUp
                                    }">{{ a.title }}</p>
                            </v-card-title>
                            <v-card-img></v-card-img>
                            <v-card-text class="font-weight-light">
                                <p :class="{
                                    'myclass1' : true,
                                    'display-2': $vuetify.breakpoint.smAndDown,
                                    'headline': $vuetify.breakpoint.mdOnly,
                                    'title': $vuetify.breakpoint.lgAndUp
                                    }">{{ a.contents }}</p>
                            </v-card-text>
                        </v-card>

                        <v-card-actions v-if="isAdmin">
                            <p :class="{
                                    'myclass1' : true,
                                    'display-2': $vuetify.breakpoint.smAndDown,
                                    'headline': $vuetify.breakpoint.mdOnly,
                                    'title': $vuetify.breakpoint.lgAndUp
                                    }">{{ a.date }}</p>
                            <v-btn outlined small fab color="indigo" :to="'/edit/'+String(i)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn outlined small fab color="indigo">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-flex>
                    
                    <v-flex 
                    md12 lg4 xl4
                    class = "pa-2"
                    v-if="isAdmin"
                    >
                    <v-btn outlined large fab color="indigo" to="edit/">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
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
        width   : "0",
        height  : "0"
    }
    },
    props:["isAdmin"],
    created: function() {
        firebase
            .database()
            .ref("articles/")
            .on("value", (result) => {this.articles = result.val()});
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