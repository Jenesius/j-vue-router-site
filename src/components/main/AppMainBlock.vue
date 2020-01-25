<template>
    <div class = "block-main">
        <div class = "block-main-header">
            <h1>J-Vue-Router</h1>
        </div>
        <app-main-animation/>

        <div class = "block-main-social">

            <img src = "../../assets/img/ico/social/vk.svg" alt = "vk.com">
            <img src = "../../assets/img/ico/social/instagram.svg" alt = "instagram.com">

        </div>
    </div>
</template>

<script>
    import AppMainAnimation from "./AppMainAnimation";
    export default {
        name: "AppMainBlock",
        components: {AppMainAnimation}
    }
</script>

<style scoped>
    .block-main{
        position: relative;
        height: 100vh;
    }

    .block-main-header{
        height: 160px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
    }

    .block-main-social{




        margin: auto;
        height: max-content;
        padding: 8px 10px;
        border-radius: 5px;

        display: flex;
        flex-flow: column nowrap;

        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;


        background-color: var(--gray-1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    .block-main-social>img{
        height: 25px;
        margin: 8px 0;
    }

</style>