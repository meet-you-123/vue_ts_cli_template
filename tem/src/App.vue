<template>
    <div id="app">
        <div id="nav" {{#router}} v-if="!$route.meta.hide" {{/router}}>
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <keep-alive>
            <router-view
                {{#router}}v-if="$route.meta.keepAlive"{{/router}}
                class="router"
            ></router-view>
        </keep-alive>
       {{#router}} <router-view v-if="!$route.meta.keepAlive" class="router"></router-view>{{/router}}
    </div>
</template>
<script>
import { defineComponent, computed } from "vue";
{{#store}}
import { useStore } from "vuex";
{{/store}}
export default defineComponent({
    setup() {
        {{#store}}
        const store = useStore();
        return {
            title: computed(() => store.state.title),
        };
        {{/store}}
    },
});
</script>
<style lang="less">
// @import "style/_variables.scss";
#app {
    // font-family: "Avenir", Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 20px 0;
    a {
        font-weight: bold;
        color: #2c3e50;
        font-size: 32px;
        &.router-link-exact-active {
            color: red;
        }
    }
}
h3 {
    font-size: 18px;
}
a {
}
</style>