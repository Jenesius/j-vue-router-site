<template>
    <div class = "app-footer">
        <p>Made with <span class = "red">♥</span> for the people of the internet.</p>
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
.app-footer{
    padding: 30px;
    background-color: var(--white-3);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 17px;
    color:var(--black-3);
    font-weight: 600;
    letter-spacing: .2px;
}
.app-footer .red{
    color:red;
}
</style>