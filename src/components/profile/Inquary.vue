<template>
    <section>
        <div class="service-column">
            <p>問い合わせ フォーム</p>
        </div>
        <div class="service-column">
            <p>問い合わせ フォーム</p>
        </div>

        <div class="service-column">
            <p>お名前</p>
        </div>
        <div class="service-column">
            <input v-model="name">
        </div>

        <div class="service-column">
            <p>メールアドレス</p>
        </div>
        <div class="service-column">
            <input v-model="mail">
        </div>

        <div class="service-column">
            <p>ご用件</p>
        </div>
        <div class="service-column">
            <input v-model="request">
        </div>
    </section>
</template>

<script>
export default {
    data () {
    return {
        name    : "name",
        mail    : "sample@gmail.com",
        request : "request"
        }
    }
};
</script>

<style>
.service-column {
    width: 50%;
    margin: 0 0 0 0;
    float: left;
}
</style>