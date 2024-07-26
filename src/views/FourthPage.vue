<script setup>
import RandomString from '@/components/RandomString.vue';
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="container">
        <RouterLink to="/thirdpage">
            <div class="btn">Third Page</div>
        </RouterLink>

        <!--Random string -->
        <RandomString />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

}

/* .btn {
    padding: .7em;
    /* color: black;
  background: #ccc; 
}*/

/* .btn:hover {
  background: #b6b6b6;
}  */
</style>
