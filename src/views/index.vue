<template>
  <div class="index">
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">wiki-practice</h1>
          <SearchForm class="has-addons-centered" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "@/components/SearchForm.vue";

@Component({
  components: {
    SearchForm
  }
})
export default class Index extends Vue {}
</script>
