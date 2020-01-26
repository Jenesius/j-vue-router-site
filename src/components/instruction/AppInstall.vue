<template>
    <div class = "app-install">
        <h3 class = "instruction-title">Installation</h3>
        <p class = "instruction-text">To install j-vue-router use npm</p>

<pre class = "tag">
    <code>
        <span class = "color-orange">npm install</span> j-vue-router <span class = "color-gray">--save</span>
    </code>
</pre>
        <p class = "instruction-text">Then, you should add activites in you code</p>
<pre class = "tag">
    <code>
        <span class = "color-purple">import</span> Vue <span class = "color-purple">from</span> <span class = "color-green">'vue'</span>

        <span class = "color-purple">import</span> JVueRouter <span class = "color-purple">from</span> <span class = "color-green">''j-vue-router'</span>

        Vue.<span class = "color-orange">use</span>(JVueRouter, { routes })
     </code>
</pre>
        <p class = "instruction-text">Also you should init your <i>routes</i></p>
<pre class = "tag">
    <code>
        <span class = "color-purple">const</span> app <span class = "color-blue">=</span> <span class = "color-purple">new</span> Vue({
            router
        }).<span class = "color-orange">$mount</span>(<span class = "color-green">'#app'</span>)
    </code>
</pre>
        <h3 class = "instruction-title">Router-View</h3>
        <p class = "instruction-text">To install j-vue-router use npm</p>
<pre class = "tag">
    <code>
        &lt;<span class = "color-sub-red">div</span> id <span class = "color-blue">=</span><span class = "color-green">'app'></span>
            &lt;<span class = "color-sub-red">router-view</span> name <span class = "color-blue">=</span> <span class="color-green">"default"</span> />
        &lt;/<span class = "color-sub-red">div</span>>
    </code>
</pre>
        <p class = "instruction-text">Every one <i>router-view</i> should have <i>name</i></p>
       <h3 class = "instruction-title">Router-Link</h3>
        <p class = "instruction-text">Use <i>router-link</i> like default from vue-router</p>
<pre class = "tag">
    <code>
        &lt;<span class = "color-sub-red">router-link</span> to <span class = "color-blue">=</span> <span class = "color-green">"/path/data"</span>>&lt;/<span class = "color-sub-red">router-link</span>>
    </code>
</pre>
        <h3 class = "instruction-title">Route Hash</h3>
        <p class = "instruction-text">Sometimes you need to open menu with changing url. For example: site.com/player -> site.com/player#menu</p>
        <p class = "instruction-text">Basic Vue router can not do this.</p>
        <p class = "instruction-text">In JVueRouter there is #hash route</p>
<pre class = "tag">
    <code>
        <span class = "color-purple">const</span> routes = [
            {
            path: <span class = "color-green">'/stream'</span>,
                components: {
                    <span class = "color-green">'main'</span>: ViewStream,
                }
            },
            {
                path: <span class = "color-green">'#menu'</span>,
                components: {
                    <span class = "color-green">'menu'</span>: ViewMenu
                },
            },
        ];
    </code>
</pre>

        <h3 class = "instruction-title">Recommendation</h3>
        <p class = "instruction-text">I don't recommend you to use <i>JRouterVue</i></p>



    </div>
</template>

<script>

    export default {
        name: "AppInstall",


    }
</script>

<style scoped>

</style>