import './style/index.scss'
import Vue from 'vue'
import TsComp from './components/TsComp.vue'

new Vue({
  el: 'app',
  components: {
    TsComp,
  },
  template: `<div>
  <TsComp/>
  <TsComp num="99"/>
  </div>`,
})