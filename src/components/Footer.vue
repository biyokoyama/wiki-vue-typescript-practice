<template>
  <footer class="footer has-background-light">
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        ©︎2020 biyokoyama
      </p>
      <p class="control">
        <a
          href="https://github.com/biyokoyama/wiki-vue-typescript-practice"
          target="_blank"
          rel="noopener"
          class="button is-small"
        >
          <FontAwesomeIcon class="icon" :icon="['fab', 'github']" />
          <span>
            Github
          </span>
        </a>
      </p>
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
