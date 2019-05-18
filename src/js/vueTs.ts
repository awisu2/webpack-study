import {Vue} from "vue-property-decorator"
import Helloworld from "../components/HelloworldTs.vue"

new Vue ({
  el: "#app",
  components: {
    Helloworld: Helloworld
  },
  template: `<div>
    <Helloworld></Helloworld>
  </div>`
})

