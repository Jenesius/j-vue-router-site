<template>
    <div class = "app-device-desktop">
        <div class = "app-device-desktop-header">
            <div class = "desktop-button-navigation">
                <span class="red"/>
                <span class="yellow"/>
                <span class="green"/>
            </div>
            <app-device-search-panel/>
        </div>
        <div class = "app-device-desktop-body"
            :class="{'desktop-body-animation': isActive}"
            >
            <div class = "desktop-body-header "></div>
            <div class = "desktop-body-map "></div>
            <div class = "desktop-body-setting "></div>
            <div class = "desktop-body-sub-block-1 "></div>
            <div class = "desktop-body-sub-block-2 "></div>
            <div class = "desktop-body-footer "></div>
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
    position: absolute;

    left: 0;
    right: 0;
    top:0;
    bottom: 0;

    margin: auto;

    overflow: hidden;

    display: flex;
    flex-flow: column nowrap;


    height: 500px;
    width: 700px;

    background-color: var(--sub-white-1);

    border: 3px solid var(--white-3);
    border-radius: 16px;


    box-shadow: var(--shadow-1);
}




    .app-device-desktop-header{

        display: flex;
        flex-flow: row nowrap;

        height: 50px;
        background-color: var(--white-3);
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
    .desktop-button-navigation>.red{
        background-color: #f91907;
    }
    .desktop-button-navigation>.green{
        background-color: #4ed432;
    }
    .desktop-button-navigation>.yellow{
        background-color: #ffe900;
    }
    .app-device-desktop-body{
        flex-grow: 1;


        padding: 10px;

        display: grid;
        grid-template-columns: 80px 80px 80px 1fr;
        grid-template-rows: 1fr 80px 1fr;
        grid-gap: 10px;

        transition: .3s;

        grid-template-areas:
        "header setting setting map"
        "header sub-block-1 sub-block-2 map"
        "header footer footer footer"
        ;
    }
    .desktop-body-animation{
        padding: 100px;
    }
    .desktop-body-animation>.desktop-body-header{
        opacity: 0.4;
        transform: translateX(-20px) scaleY(1.15);
        transition-delay: 0.3s;

    }
    .desktop-body-animation>.desktop-body-map{
         transition-delay: 0.3s ;
         transform: translate(20px, -4px) scaleY(1.15);
     }
.desktop-body-animation>.desktop-body-setting{
    transition-delay: 0.3s;
    transform: translateY(-20px);
}
.desktop-body-animation>.desktop-body-sub-block-1{
    transition-delay: 0.3s;
    transform: scaleY(1.2) scaleX(0.9) translateX(-5px);
}
.desktop-body-animation>.desktop-body-sub-block-2{
    transition-delay: 0.3s;
    transform: scaleY(1.2) scaleX(0.9) translateX(5px);
}
.desktop-body-animation>.desktop-body-footer{
    transition-delay: 0.3s;
    transform: translate(10px,20px) scaleX(1.05);
}
    .app-device-desktop-body>div{

        transition: .3s;

        opacity: 0.7;
        border-radius: 7px;
    }
    .desktop-body-header{
        width: 100%;
        background-color: #83abff;
        grid-area: header;
    }
    .desktop-body-map{
        background-color: var(--white-4);
        grid-area: map;
    }
    .desktop-body-setting{
        grid-area: setting;
        background-color: var(--white-4);
    }
    .desktop-body-sub-block-1{
        grid-area: sub-block-1;
        background-color: var(--white-4);
    }
    .desktop-body-sub-block-2{
        grid-area: sub-block-2;
        background-color: var(--white-4);
    }
    .desktop-body-footer{
        grid-area: footer;
        background-color: var(--white-4);
    }
@media screen and (max-width: 1200px){
    .app-device-desktop{
        top:21%;

        height: 170px;
        width: 300px;
    }
    .app-device-desktop-header{

        display: flex;
        flex-flow: row nowrap;

        height: 30px;
        background-color: var(--white-3);
    }
    .app-device-desktop-body{
        padding: 5px;
        grid-gap: 5px;

        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        transition: .3s;

        grid-template-areas:
                "header setting setting map"
                "header sub-block-1 sub-block-2 map"
                "header footer footer footer"
    ;
    }
    .desktop-body-header{
        width: auto;
    }
    .desktop-body-animation{
        padding: 20px;
    }
    .desktop-body-animation>.desktop-body-header{
        opacity: 0.4;
        transform: none;
        transition-delay: 1s;

    }
    .desktop-body-animation>.desktop-body-map{
        transition-delay: 1s ;
        transform: none;
    }
    .desktop-body-animation>.desktop-body-setting{
        transition-delay: 1s;
        transform: none;
    }
    .desktop-body-animation>.desktop-body-sub-block-1{
        transition-delay: 1s;
        transform: none;
    }
    .desktop-body-animation>.desktop-body-sub-block-2{
        transition-delay: 1s;
        transform: none;
    }
    .desktop-body-animation>.desktop-body-footer{
        transition-delay: 1s;
        transform: none;
    }
}
</style>