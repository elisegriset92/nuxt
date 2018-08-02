<template>
<div class="text">
  <h1>coucou from one</h1>
  <p>Click <button @click="toggleTitle()">here</button> to change the title : {{title}}</p>
  <router-link to="/">Go Back</router-link>

</div>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';
export default {
    methods: {
    ...mapActions(['changeTitle']),
      toggleTitle() {
        return this.changeTitle()
      }
    },
    computed: {
    ...mapGetters(['title']),
}

}
</script>

<style scoped>

</style>
