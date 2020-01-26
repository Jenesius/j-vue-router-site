<template>
    <div class = "app-instruction">
        <div class = "container">
            <app-install></app-install>
        </div>
    </div>
</template>

<script>
    import AppInstall from "./AppInstall";
    export default {
        name: "AppInstruction",
        components: {AppInstall},
        data: () => {
            return {
                test: "<img src = 'sfsdf' alt = '123'>"
            }
        }
    }
</script>

<style>
.app-instruction{
    background-color: var(--white-2);

    padding: 20px;
}
.app-instruction>.container{
    margin: auto;
    width: 100%;
    max-width: 1200px;
}

@media screen and (max-width: 1200px){
    .app-instruction>.container{
        margin: auto;
        width: 100%;
        max-width: 700px;
    }
}

.instruction-title{
    color:var(--black-1);
    font-weight: 600;

    font-size: 27px;
    letter-spacing: 1px;
    margin: 36px 0 13px 0;
}
.instruction-text{
    color:var(--black-3);
    font-size: 18px;

    margin-bottom: 8px;
}
    .app-instruction .tag{
        display: flex;
        background-color: #1b062d;
        color:var(--sub-white-1);
        letter-spacing: 1px;

        border-radius: 6px;
        margin: 13px 0;

        overflow-x: auto;

    }
    .app-instruction .tag span{
        line-height: 30px;
    }
    .app-instruction .tag>code{
        padding-right: 30px;

    }
</style>