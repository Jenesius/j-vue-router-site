<template>
    <div class = "app-install">
        <h3 class = "instruction-title">Installation</h3>
        <p class = "instruction-text">To install j-vue-router use npm</p>
        <app-code >
        <pre>
            <span class = "orange" >npm install </span> <span>  j-vue-router </span><span class = "gray">--save</span>
        </pre>
        </app-code>
        <p  class = "instruction-text">Also you must explicitly install the j-router vie <i>Vue.use()</i></p>

        <app-code>
        <pre>
            <span class = "purple">import</span> Vue <span class = "purple">from</span> <span class = "green">'vue'</span>
            <span class = "purple">import</span> JVueRouter <span class = "purple">from</span> <span class = "green">'j-vue-router'</span>

            <span>Vue.<span class = "orange">use</span>(JVueRouter, { <span class = "orange">routes</span> });</span>
        </pre>
        </app-code>

        <p  class = "instruction-text">Init the <i>routes</i> </p>
        <app-code>
        <pre>
            <span class = "purple">const</span> <span class = "orange">routes</span> = [
                {
                    path: <span class = "green">'/'</span>,
                    components: {
                        <span class="green">'default'</span>: ViewMain
                    },
                }
            ];
            </pre>
        </app-code>


        <h3 class = "instruction-title">Recommendation</h3>
        <p class = "instruction-text">I don't recommend you to use <i>JRouterVue</i></p>
    </div>
</template>

<script>
    import AppCode from "./AppCode";
    export default {
        name: "AppInstall",
        components: {AppCode},

    }
</script>

<style scoped>

</style>