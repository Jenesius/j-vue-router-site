<template>
    <div class = "app-main-animation">

        <app-phone/>
        <app-desktop/>
        <app-tablet/>
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

</style>