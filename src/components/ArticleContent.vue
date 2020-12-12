<template>
  <div class="article-content content">
    <div class="field is-grouped">
      <div class="control is-expanded">
        <h1 class="title" v-show="!isEditing" v-text="titleForView"></h1>
        <input
          type="text"
          class="input"
          placeholder="title here"
          v-show="isEditing"
          v-model="formData.title"
        />
      </div>
      <div class="control">
        <div class="buttons is-right">
          <button class="button" v-show="!isEditing" @click="onClickEdit">
            Edit
          </button>
          <button
            class="button is-primary"
            v-show="isEditing"
            @click="onClickSave"
          >
            Save
          </button>
          <button class="button" v-show="isEditing" @click="onClickCancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <p
          class="article-content__body-paragraph"
          v-show="!isEditing"
          v-html="bodyForView"
        ></p>
        <textarea
          class="textarea has-fixed-size"
          placeholder="body here"
          v-show="isEditing"
          v-model="formData.body"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { ArticleContentFormData } from "@/types/article";
import { ArticleEntity } from "@/classes/article";

@Component
export default class ArticleContent extends Vue {
  isEditing = false;
  formData: ArticleContentFormData = {
    title: "",
    body: ""
  };

  @Prop()
  article!: ArticleEntity | null;

  get titleForView(): string {
    return this.article ? this.article.title : "(title here)";
  }

  get bodyForView(): string {
    return this.article ? this.article.body : "(body here)";
  }

  onClickEdit(): void {
    this._initFormData();
    this.isEditing = true;
  }

  @Emit("save")
  onClickSave(): ArticleContentFormData {
    this.isEditing = false;
    return this.formData;
  }

  @Emit("cancel")
  onClickCancel(): void {
    this._initFormData();
    this.isEditing = false;
  }

  _initFormData(): void {
    if (!this.article) return; // articleがなければ何もしない

    this.formData.title = this.article.title;
    this.formData.body = this.article.body;
  }
}
</script>

<style lang="scss" scoped>
.article-content {
  &__body-paragraph {
    white-space: pre-wrap;
  }
}
</style>
