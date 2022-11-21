<template>
  <div>
    <MenuComponent/>
    <router-view></router-view>
  </div>
</template>

<script>

import MenuComponent from './components/MenuComponent'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>

</style>
