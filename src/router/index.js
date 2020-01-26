import Vue from 'vue';

import JVueRouter from 'j-vue-router'
import ViewMain from "../view/ViewMain";

const routes = [
    {
        path: '/',
        components: {
            'default': ViewMain
        },
    }
];

Vue.use(JVueRouter, {
   basic: {
       removeHash: true,
   } ,
    routes
});

export default routes;

