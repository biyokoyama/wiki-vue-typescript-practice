<template>
  <div class="field has-addons">
    <div class="control">
      <input class="input" v-model="formData.query" @keydown.enter="doSearch" />
    </div>
    <div class="control">
      <button class="button is-primary" @click="doSearch">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SearchFormData } from "@/types/search";

@Component
export default class SearchForm extends Vue {
  formData: SearchFormData = {
    query: this.$store.getters["search/query/get"]
  };

  doSearch(): void {
    if (this.$route.query.q !== this.formData.query) {
      this.$store.dispatch("search/query/update", `${this.formData.query}`);
      this.$router.push(`/search?q=${this.formData.query}`);
    }
  }
}
</script>
