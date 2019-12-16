<template>
  <div id="app">
    <intro></intro>
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import intro from '@/components/intro/intro.vue'
import navigation from '@/components/navigation/navigation.vue'

export default {
  name: 'App',
  components: {
    intro,
    navigation
  }
}
</script>

<style>

</style>
