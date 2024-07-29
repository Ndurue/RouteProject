<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
  <body>
      <!-- <router-view> </router-view> -->
       <RouterView></RouterView>
  </body>
</template>

<style>

body{
    height:100vh;
    display: flex;
    place-items: center;
}

  .container {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.btn {
  padding: .7em 2em;
  text-align: center;
  /* color: black;
  background: #ccc; */
}

/* .btn:hover {
  background: #b6b6b6;
} */
</style>
