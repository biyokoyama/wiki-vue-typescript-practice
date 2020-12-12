<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <span class="image is-24x24">
          <img
            class="is-rounded"
            src="@/assets/logo.png"
            width="24"
            height="24"
          />
        </span>
        <span class="navbar__title">
          wiki-vue-typescript-practice
        </span>
      </router-link>
      <div v-if="isSearchFormShown" class="navbar-item">
        <SearchForm />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "@/components/SearchForm.vue";

@Component({
  components: {
    SearchForm
  }
})
export default class Navbar extends Vue {
  get isSearchFormShown(): boolean {
    return this.$route.path !== "/";
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &__title {
    margin-left: 1rem;
  }
}
</style>
