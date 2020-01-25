<template>
    <div class = "desktop-search-panel">
        <div class = "desktop-search-panel-input">

        </div>
    </div>
</template>

<script>
    export default {
        name: "AppDeviceSearchPanel"
    }
</script>

<style scoped>
    .desktop-search-panel{
        padding: 6px 6px 9px 9px;

        flex-grow: 1;

    }
    .desktop-search-panel-input{
        background-color: var(--sub-white-1);

        width: 100%;
        height: 100%;

        border-radius: 6px;
    }
</style>