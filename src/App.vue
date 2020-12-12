<template>
  <div id="app" class="app">
    <Navbar />
    <router-view class="app__router-view" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__router-view {
    flex: 1;
  }
}
</style>
