<template>
    <div class = "main">
        <app-main-block/>
        <app-instruction/>
    </div>
</template>

<script>
    import AppMainBlock from "../components/main/AppMainBlock";
    import AppInstruction from "../components/instruction/AppInstruction";

    export default {
        name: "ViewMain",
        components: {AppInstruction, AppMainBlock},

    }
</script>

<style >

</style>