<template>
    <div id="app" class="blog">
        <v-app id="inspire">            
            <v-card :width="width" class="mx-auto">
                <v-responsive :aspect-ratio="16/9">
                    <v-img
                        v-if="media"
                        class="white--text"
                        src="img/yashio1.jpeg"
                        >
                    <p>YOKOSO SAWARA7's Blog </p>
                    </v-img>
                </v-responsive>
                <div v-for="(a,index) in articles" :key="index">
                    <v-card-title>{{ a.title }}</v-card-title>
                    <v-card-text>{{ a.date }}:{{ a.contents }}</v-card-text>
                </div>
            </v-card>
            <v-card height="150">
                <v-footer absolute class="font-weight-medium">
                    <v-flex text-center xs12>
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    </v-flex>
                </v-footer>
            </v-card>
        </v-app>
    </div>
</template>

<script>
export default {
    name: "blog",
    data() {
        return {
            flat: false,
            media: true,
            loading: false,
            actions: true,
            outlined: false,
            elevation: undefined,
            raised: false,
            width: "500",
            height: undefined,
            ref: "sample",
            articles: [
                // {
                // title:    "title",
                // date:     "date",
                // type:     "type",
                // contents: "contents"
                // }
            ],
            selectedIndex: 0
        };
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
    }
};
</script>

<style></style>
