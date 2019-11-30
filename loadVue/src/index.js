import './styles/index.scss'
import Vue from 'vue'
import JsComp from './components/JsComp'
import TsComp from './components/TsComp'

new Vue({
  el: 'app',
  components: {
    JsComp,
    TsComp
  },
  template: `<div>
    <JsComp />
    <TsComp/>
    <TsComp :num="99"/>
  </div>`,
})