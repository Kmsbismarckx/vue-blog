<script setup lang="ts">
import { type Post, PostsService } from '@/shared/api/posts/PostsService'
import { onMounted, ref } from 'vue'

const postsService: PostsService = new PostsService()

const posts = ref<Post[]>([])

onMounted(async () => {
  posts.value = await postsService.getPosts()
})
</script>

<template>
  <div class="Column">
    <div class="Column post" v-for="post in posts" :key="post.id">
      <h4 class="title">{{ post.title }}</h4>
      <div class="description">{{ post.body }}</div>
    </div>
  </div>
</template>

<style scoped>
.post {
  background-color: var(--bg);
  border-radius: 4px;
  padding: 4px 16px;
  gap: 8px;
}
.description {
  color: var(--comment);
}
</style>
