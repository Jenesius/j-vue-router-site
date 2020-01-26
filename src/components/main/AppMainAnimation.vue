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

<style>
    @import "../../assets/css/app-main-animation-device.css";

    .app-main-animation{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-grow: 1;

        width: 100%;
        height: 100%;


    }


    .app-main-animation-container{
        position: relative;

        margin: auto;

        height: 100%;
        width: 100%;

    }
    @media screen and (min-width: 1200px) {
        .app-main-animation-container{
            max-width: 1080px;
            min-width: 900px;

            max-height: 700px;
            min-height: 490px;
        }
    }
    @media screen and (max-width: 1200px) and (min-width: 930px){
        .app-main-animation-container{
            max-width: 800px;
            min-width: 700px;

            max-height: 550px;
            min-height: 490px;
        }
    }

    @media screen and (max-width: 930px) and (min-width: 800px){
        .app-main-animation-container{
            max-width: 600px;
            max-height: 480px;

        }
    }
    @media screen and (max-width: 800px){
        .app-main-animation-container{

            top:10%;
            width: 90%;
            height: 50%;
        }
    }


</style>