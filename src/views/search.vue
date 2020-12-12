<template>
  <div class="search has-background-light">
    <SearchedArticles :articles="articles" />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import SearchedArticles from "@/components/SearchedArticles.vue";
import { ArticleEntity, ArticleRepo } from "@/classes/article";

@Component({
  components: {
    Navbar,
    SearchedArticles
  }
})
export default class Search extends Vue {
  articles: ArticleEntity[] = [];

  mounted(): void {
    this._fetchArticles();
  }

  @Watch("$route")
  async _fetchArticles(): Promise<void> {
    this.articles = await ArticleRepo.getList(`${this.$route.query.q}`);
  }
}
</script>
