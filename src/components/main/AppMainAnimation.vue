<template>
    <div class = "app-main-animation">
        <div class = "app-main-animation-container">
            <app-phone/>
            <app-desktop/>
            <app-tablet/>
        </div>
    </div>
</template>

<script>

    import AppDesktop from "../device/AppDesktop";
    import AppPhone from "../device/AppPhone";
    import AppTablet from "../device/AppTablet";

    export default {
        name: "AppMainAnimation",
        components: {
            AppTablet, AppPhone, AppDesktop
        }
    }
</script>

<style scoped>
    .app-main-animation{

        display: flex;
        flex-grow: 1;

        width: 100%;
        height: 100%;


        padding: 8% 13%;


    }
    .app-main-animation-container{
        height: 100%;
        width: 100%;
        position: relative;

        margin: auto;

        max-width: 1080px;
        min-width: 900px;
        min-height: 590px;
    }
</style>