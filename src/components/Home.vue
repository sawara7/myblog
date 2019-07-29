<template>
    <div id="app" class="blog">
        <p>YOKOSO SAWARA7's Blog </p>
        <v-app id="inspire">
            <v-responsive :aspect-ratio="16/9">
                <v-card class="mx-auto">
                    <div v-for="(a,index) in articles" :key="index">
                        <v-card-title>{{ a.title }},{{ a.date }}</v-card-title>
                        <v-card-text>{{ a.contents }}</v-card-text>
                    </div>
                </v-card>
            </v-responsive>
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
            width: 344,
            height: undefined,
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
            })
    }
};
</script>

<style></style>
