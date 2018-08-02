<template>
<div class="text">
  <h1>coucou from user/index.vue</h1>

<Test></Test>

  <router-link to="/">Go Back</router-link>

</div>
</template>

<script>
import Test from '../../components/Test.vue'
export default {
   components: {
    Test
  }
}
</script>

<style scoped>

</style>
