<script setup>
import { RouterLink } from 'vue-router';
console.log('Third Page Loaded');

</script>

<template>
    <div class="container">

        <RouterLink to="/">
            <div class="btn">First Page</div>
        </RouterLink>

        <RouterLink to="/secondpage">
            <div class="btn">Second Page</div>
        </RouterLink>

        <RouterLink to="/fourthpage">
            <div class="btn">Fourth Page</div>
        </RouterLink>
        
    </div>
</template>

<style scoped>
@media (max-width: 523px) {
  .container {
    flex-direction: column; 
  }
}
</style>