<template>
    <div class = "app-main-animation-device app-device-tablet">
        <div class = "app-main-animation-device-header">
            <app-device-search-panel/>
            <div class = "tablet-button-navigation">
                <span></span>
            </div>
        </div>
        <div class = "app-main-animation-device-body app-device-tablet-body">
            <div class = "app-main-animation-body-header tablet-body-header"></div>
            <div class = "app-main-animation-body-map"></div>
            <div class = "app-main-animation-body-setting"></div>
            <div class = "app-main-animation-body-sub-block-1"></div>
            <div class = "app-main-animation-body-sub-block-2"></div>
        </div>
    </div>
</template>

<script>
    import AppDeviceSearchPanel from "./elem/AppDeviceSearchPanel";

    export default {
        name: "AppTablet",
        components: {AppDeviceSearchPanel}
    }
</script>

<style scoped>
    .app-device-tablet{
        opacity: 0.7;

        z-index: 0;

        right: 0;
        bottom: 0;

        height: 53%;
        width: 47%;
    }

    .tablet-button-navigation{
        width: 45px;
        padding: 7px;

    }
    .tablet-button-navigation>span{
        display: block;

        height: 100%;

        background-color: var(--white-5);

        opacity: 0.75;
        border-radius: 8px;
    }
    .app-device-tablet-body{
        grid-template-rows: 60px 1fr 1fr;
        grid-template-columns: 1fr 70px 100px;

        grid-template-areas:
                "header header header"
                "map sub-block-1 setting"
                "map sub-block-2 setting";
    }

    .tablet-body-header {
        background-color: var(--orange);
    }

    @media screen and (max-width: 1200px){
        .app-device-tablet-body{
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;

            grid-template-areas:
                    "header header header"
                    "map sub-block-1 setting"
                    "map sub-block-2 setting";
        }

    }
</style>