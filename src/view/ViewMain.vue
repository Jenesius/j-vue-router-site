<template>
    <div class = "app-main">
        <app-main-block/>
        <app-instruction/>
        <app-footer/>

    </div>
</template>

<script>
    import AppMainBlock from "../components/main/AppMainBlock";
    import AppInstruction from "../components/instruction/AppInstruction";
    import AppFooter from "../components/footer/AppFooter";

    export default {
        name: "ViewMain",
        components: {AppFooter, AppInstruction, AppMainBlock},
        data: () => {
            return {

            }
        }

    }
</script>

<style >
.app-main{
    height: 100%;
}
</style>