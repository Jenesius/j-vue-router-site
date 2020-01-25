<template>
    <div class = "app-device-phone">
        <div class = "app-device-phone-header">
            <app-device-search-panel/>
            <div class = "phone-button-navigation">
                <span></span>
            </div>
        </div>
        <div class = "app-device-phone-body">
            <div class = "phone-body-header"></div>
            <div class = "phone-body-map"></div>
            <div class = "phone-body-setting"></div>
            <div class = "phone-body-sub-block-1"></div>
            <div class = "phone-body-sub-block-2"></div>
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

        position: absolute;

        left: 0%;


        bottom: 0;

        margin: auto;

        overflow: hidden;

        display: flex;
        flex-flow: column nowrap;


        height: 400px;
        width: 230px;

        background-color: var(--sub-white-1);

        border: 3px solid var(--white-3);
        border-radius: 16px;


        box-shadow: var(--shadow-1);
    }

    .app-device-phone-header{

        display: flex;
        flex-flow: row nowrap;

        height: 40px;
        background-color: var(--white-3);
    }
        .phone-button-navigation{
            width: 45px;
            padding: 7px;

        }
    .phone-button-navigation>span{
        background-color: #bfbfbf5e;
        flex-grow: 1;

        opacity: 0.75;

        height: 100%;
        width: 100%;

        display: block;

        border-radius: 8px;
    }
    .app-device-phone-body{

        flex-grow: 1;

        display: grid;

        grid-template-rows: 60px 1fr 120px;
        grid-template-columns: 60px 1fr;
        grid-gap: 10px;

        grid-template-areas:
        "header none"
        "map map"
        "sub-block-1 sub-block-2"
        ;

        padding: 10px;

        transition: 0.3s;
    }
    .app-device-phone-body>div{

        transition: .3s;

        opacity: 0.7;
        border-radius: 7px;
    }
    .phone-body-header{

        background-color: #c483ff;
        grid-area: header;
    }
    .phone-body-map{
        background-color: #e7e7e7;
        grid-area: map;
    }
    .phone-body-sub-block-1{
        grid-area: sub-block-1;
        background-color: #ede9f6;
    }
    .phone-body-sub-block-2{
        grid-area: sub-block-2;
        background-color: #f1eaef;
    }

</style>