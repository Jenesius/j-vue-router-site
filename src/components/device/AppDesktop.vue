<template>
    <div class = "app-device-desktop">
        <div class = "app-device-desktop-header">
            <div class = "desktop-button-navigation">
                <span class="red"/>
                <span class="yellow"/>
                <span class="green"/>
            </div>
            <div class = "desktop-search-panel">
                <div class = "desktop-search-panel-input">

                </div>
            </div>
        </div>
        <div class = "app-device-desktop-body"></div>
    </div>
</template>

<script>
    export default {
        name: "appDesktop"
    }
</script>

<style scoped>
.app-device-desktop{
    overflow: hidden;

    display: flex;
    flex-flow: column nowrap;


    height: 600px;
    width: 800px;

    background-color: var(--sub-white-1);

    border: 1px solid var(--white-3);
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

    }
.desktop-button-navigation>.red{
    background-color: #ed1706;
}
.desktop-button-navigation>.green{
    background-color: #20c42f;
}
.desktop-button-navigation>.yellow{
    background-color: #ffde09;
}
.desktop-search-panel{
    padding: 8px;

    flex-grow: 1;

}
    .desktop-search-panel-input{
        background-color: var(--sub-white-1);

        width: 100%;
        height: 100%;

        border-radius: 7px;
    }
</style>