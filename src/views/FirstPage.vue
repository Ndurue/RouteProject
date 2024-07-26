<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>


  <div class="container">
    <RouterLink to="/secondpage" class="router-link">
      <div class="btn">Second Page</div>
    </RouterLink>

    <RouterLink to="thirdpage">
      <div class="btn">Third Page</div>
    </RouterLink>


  </div>
</template>

<style scoped>


</style>