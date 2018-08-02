<template>
<div>
  <h1>coucou from test</h1>

  <h3>Title : {{title}}</h3>

  <input style="width:250px; text-align: center" v-model="titleBis" @input="inputTitle" type="text" placeholder="type here to change the title">


</div>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';
export default {
  data() {
    return {
      titleBis : '',
    }
  },
  methods: {
  ...mapActions(['changeInputTitle']),
    inputTitle() {
      return this.changeInputTitle(this.titleBis)
    }
  },
  computed: {
  ...mapGetters(['title']),
  },
}
</script>

<style scoped>

</style>
