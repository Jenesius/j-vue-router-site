<template>
    <div class = "app-main-animation-device app-device-desktop">
        <div class = "app-main-animation-device-header app-device-desktop-header">
            <div class = "desktop-button-navigation">
                <span class="back-color-red"/>
                <span class="back-color-yellow"/>
                <span class="back-color-green"/>
            </div>
            <app-device-search-panel/>
        </div>
        <div class = "app-main-animation-device-body app-device-desktop-body"
            :class="{'desktop-body-animation': isActive}"
            >
            <div class = "app-main-animation-body-header desktop-body-header "></div>
            <div class = "app-main-animation-body-map "></div>
            <div class = "app-main-animation-body-setting "></div>
            <div class = "app-main-animation-body-sub-block-1 "></div>
            <div class = "app-main-animation-body-sub-block-2 "></div>
            <div class = "app-main-animation-body-footer "></div>
        </div>
    </div>
</template>

<script>
    import AppDeviceSearchPanel from "./elem/AppDeviceSearchPanel";
    export default {
        name: "appDesktop",
        data: ()=>{
          return {
              isActive: true,
          }
        },
        components: {AppDeviceSearchPanel},
        mounted() {

            //Animation 15 second
            //5 active/ 10 delay

            setInterval(() => {
                this.isActive = !this.isActive;
            },3000);
        }
    }
</script>

<style scoped>
    .app-device-desktop{
        z-index: 1;

        left: 0;
        right: 0;
        top:0;
        bottom: 0;

        height: 70%;
        width: 65%;
    }
    .desktop-button-navigation{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 65px;
    }
    .desktop-button-navigation>span{
        height: 11px;
        width: 11px;
        border-radius: 50%;
        opacity: 0.85;
    }
    .app-device-desktop-body{
        grid-template-columns: 80px 80px 80px 1fr;
        grid-template-rows: 1fr 80px 1fr;

        grid-template-areas:
        "header setting setting map"
        "header sub-block-1 sub-block-2 map"
        "header footer footer footer";
    }
    .desktop-body-animation{
        padding: 100px;
    }
    .desktop-body-header{
        background-color: #83abff;
    }




@media screen and (max-width: 1200px){

    .app-device-desktop-body{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        grid-template-areas:
                "header setting setting map"
                "header sub-block-1 sub-block-2 map"
                "header footer footer footer";
    }
    .desktop-body-animation{
        padding: 20px;
    }
}
</style>