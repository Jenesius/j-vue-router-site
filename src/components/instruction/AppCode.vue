<template>
    <div class = "app-code">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AppCode",
        props:{
            text: String
        },
         mounted() {

         }
    }
</script>

<style scoped>
.app-code{
    background-color: #1c0931;

    color:white;

    padding: 20px 20px 0 20px;

    border-radius: 15px;
    margin: 10px 0;
}
    .app-code>*{
        letter-spacing: 1px;
        line-height: 24px;
    }


    .orange{
        color: rgba(255, 150, 16, 0.88);
    }
    .purple{
        color: #8725d6;
    }
    .green{
        color: #32b92c;
    }
    .gray{
        color: #7a7a7a;;
    }
</style>