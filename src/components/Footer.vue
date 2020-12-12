<template>
  <footer class="footer has-background-light">
    <div class="content has-text-centered">
      <p>©︎2020 biyokoyama</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem;
}
</style>
