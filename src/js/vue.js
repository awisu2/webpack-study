import {Vue} from "vue-property-decorator"
import Helloworld from "../components/Helloworld.vue"

new Vue ({
  el: "#app",
  components: {
    Helloworld: Helloworld
  },
  template: `<div>
    <Helloworld></Helloworld>
  </div>`
})

