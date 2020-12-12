<template>
  <div class="searched-articles section">
    <div class="container">
      <div class="content">
        <router-link
          v-for="article in articles"
          :key="article.id"
          :to="article.path"
          class="box"
        >
          <p class="subtitle">{{ article.title }}</p>
          <p>
            {{ article.body }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ArticleEntity } from "@/classes/article";

@Component
export default class SearchedArticles extends Vue {
  @Prop()
  articles!: ArticleEntity[];
}
</script>

<style lang="scss" scoped>
.searched-articles {
  .box:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
    transition: 0.5s;
  }
}
</style>
