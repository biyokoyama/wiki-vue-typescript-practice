<template>
  <div class="articles-id">
    <div class="section">
      <div class="container">
        <ArticleContent :article="article" @save="onSaveArticleContent" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import ArticleContent from "@/components/ArticleContent.vue";
import { ArticleContentFormData } from "@/types/article";
import { ArticleEntity, ArticleRepo } from "@/classes/article";

@Component({
  components: {
    Navbar,
    ArticleContent
  }
})
export default class ArticlesId extends Vue {
  article: ArticleEntity | null = null;

  get articleId(): number {
    return parseInt(this.$route.params.id, 10);
  }

  onSaveArticleContent(formData: ArticleContentFormData): void {
    this._updateArticle(formData);
  }

  mounted(): void {
    this._fetchArticle();
  }

  async _updateArticle(formData: ArticleContentFormData): Promise<void> {
    // 更新
    await ArticleRepo.updateById(this.articleId, formData);

    // 再取得
    this._fetchArticle();
  }

  async _fetchArticle(): Promise<void> {
    // 正常系
    try {
      this.article = await ArticleRepo.findById(this.articleId);
    } catch (error) {
      // 異常系
      switch (error.response?.status) {
        case 404:
          this.$router.push("/");
          break;
        default:
          throw error;
      }
    }
  }
}
</script>
