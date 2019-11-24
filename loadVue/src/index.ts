import './style/index.scss'
import {Bar} from './libs/bar'
import Vue from 'vue'

Bar.hello()

new Vue({
  el: 'app',
  template: "<div>hogehoge</div>",
})