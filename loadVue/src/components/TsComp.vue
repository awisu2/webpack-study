<template><section>
  <h2>tscomp</h2>
  {{ total }} <button @click="addCount">+</button>
</section></template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component({
  name: "TsComp"
})
export default class TsComp extends Vue {
  // props
  @Prop({ default: 0 })
  num!: number;

  // datas
  count: number = 0

  // computeds
  get total() {
    return this.num + this.count
  }

  // methods
  addCount() {
    this.count += 1
  }
}
</script>

<style scoped lang="scss">
</style>
