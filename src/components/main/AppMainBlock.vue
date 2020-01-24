<template>
    <div class = "block-main">
        <div class = "block-main-header">
            <h1>J-Vue-Router</h1>
        </div>
        <div class = "block-main-animation">
            <app-main-animation/>
        </div>
        <div class = "block-main-social">



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
    }

    .block-main-social{

        margin: auto;
        height: max-content;
        padding: 10px;
        border-radius: 5px;

        display: flex;
        flex-flow: column nowrap;

        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;


        background-color: var(--white-1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .block-main-animation{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>