<template>
    <div class = "app-main-animation-device app-device-phone">
        <div class = "app-main-animation-device-header">
            <app-device-search-panel/>
            <div class = "phone-button-navigation">
                <span/>
            </div>
        </div>
        <div class = "app-main-animation-device-body app-device-phone-body">
            <div class = "app-main-animation-body-header phone-body-header"></div>
            <div class = "app-main-animation-body-map"></div>
            <div class = "app-main-animation-body-sub-block-1"></div>
            <div class = "app-main-animation-body-sub-block-2"></div>
        </div>
    </div>
</template>

<script>
    import AppDeviceSearchPanel from "./elem/AppDeviceSearchPanel";
    export default {
        name: "appPhone",
        components: {AppDeviceSearchPanel}
    }
</script>

<style scoped>
    .app-device-phone{
        opacity: 0.7;

        left: 0;
        bottom: 0;

        height: 70%;
        width: 25%;

        z-index: 0;
    ;
    }
    .phone-button-navigation{
        width: 45px;
        padding: 7px;
    }
    .phone-button-navigation>span{
        display: block;

        height: 100%;

        opacity: 0.75;

        background-color: var(--white-5);
        border-radius: 8px;
    }
    .app-device-phone-body{
        grid-template-rows: 60px 1fr 120px;
        grid-template-columns: 60px 1fr;
        grid-template-areas:
        "header none"
        "map map"
        "sub-block-1 sub-block-2";
    }
    .app-device-phone-body{
        grid-template-rows: 60px 1fr 1fr;
        grid-template-columns: 60px 1fr 70px;

        grid-template-areas:
                "header none none"
                "map map map"
                "sub-block-1 sub-block-1 sub-block-2 ";
    }

    .phone-body-header{
        background-color: var(--purple);
    }



    @media screen and (max-width: 1200px){

        .app-device-phone-body{

            grid-template-rows: 1fr 3fr 1fr;
            grid-template-columns: 1fr 1fr;

            grid-template-areas:
                    "header none"
                    "map map"
                    "sub-block-1 sub-block-2";

        }
    }
</style>