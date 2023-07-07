import { createApp } from 'vue'
import './libreriaRB.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
library.add(fasStar, farStar, faMagnifyingGlass)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
