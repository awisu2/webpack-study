<template><section>
  {{num}} <button @click="num += 1">+</button>
</section></template>

<script>
export default {
  name: 'my-components',
  data: function() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped lang="scss">
</style>
