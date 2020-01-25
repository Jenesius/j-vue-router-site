<template>
    <div class = "app-device-tablet">
        <div class = "app-device-tablet-header">
            <app-device-search-panel/>
            <div class = "tablet-button-navigation">
                <span></span>
            </div>
        </div>
        <div class = "app-device-tablet-body">
            <div class = "tablet-body-header"></div>
            <div class = "tablet-body-map"></div>
            <div class = "tablet-body-setting"></div>
            <div class = "tablet-body-sub-block-1"></div>
            <div class = "tablet-body-sub-block-2"></div>
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

        z-index: 0;
        opacity: 0.7;

        position: absolute;

        right: 0;


        bottom: 0;

        margin: auto;

        overflow: hidden;

        display: flex;
        flex-flow: column nowrap;


        height: 330px;
        width: 500px;

        background-color: var(--sub-white-1);

        border: 3px solid var(--white-3);
        border-radius: 16px;


        box-shadow: var(--shadow-1);
    }

    .app-device-tablet-header{

        display: flex;
        flex-flow: row nowrap;

        height: 40px;
        background-color: var(--white-3);
    }
    .tablet-button-navigation{
        width: 45px;
        padding: 7px;

    }
    .tablet-button-navigation>span{
        background-color: #bfbfbf5e;
        flex-grow: 1;

        opacity: 0.75;

        height: 100%;
        width: 100%;

        display: block;

        border-radius: 8px;
    }
    .app-device-tablet-body{

        flex-grow: 1;

        display: grid;

        grid-template-rows: 60px 1fr 1fr;
        grid-template-columns: 1fr 70px 100px;
        grid-gap: 10px;

        grid-template-areas:
                "header header header"
                "map sub-block-1 setting"
                "map sub-block-2 setting"
    ;

        padding: 10px;

        transition: 0.3s;
    }
    .app-device-tablet-body>div{

        transition: .3s;

        opacity: 0.7;
        border-radius: 7px;
    }
    .tablet-body-header{

        background-color: #ffa500d1;
        grid-area: header;
    }
    .tablet-body-map{
        background-color: #e7e7e7;
        grid-area: map;
    }
    .tablet-body-setting{
        background-color: #e7e7e7;
        grid-area: setting;
    }
    .tablet-body-sub-block-1{
        grid-area: sub-block-1;
        background-color: #ede9f6;
    }
    .tablet-body-sub-block-2{
        grid-area: sub-block-2;
        background-color: #f1eaef;
    }

</style>