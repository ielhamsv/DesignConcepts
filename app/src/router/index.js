import { createRouter, createWebHistory } from 'vue-router'
import Introduction from "@/views/Introduction.vue";
import list from "@/views/list.vue"
import slide1 from "@/views/slide1.vue"
import slide2 from "@/views/slide2.vue"
import slide3 from "@/views/slide3.vue"
import slide4 from "@/views/slide4.vue"
import slide5 from "@/views/slide5.vue"
import slide6 from "@/views/slide6.vue"
import slide7 from "@/views/slide7.vue"
import slide8 from "@/views/slide8.vue"
import slide9 from "@/views/slide9.vue"
import slide10 from "@/views/slide10.vue"
import slide11 from "@/views/slide11.vue"
import slide12 from "@/views/slide12.vue"
import slide13 from "@/views/slide13.vue"
import slide14 from "@/views/slide14.vue"
import slide15 from "@/views/slide15.vue"
import slide16 from "@/views/slide16.vue"
import slide17 from "@/views/slide17.vue"
import slide18 from "@/views/slide18.vue"
import slide19 from "@/views/slide19.vue"
import slide20 from "@/views/slide20.vue"
import slide21 from "@/views/slide21.vue"
import slide22 from "@/views/slide22.vue"
import slide23 from "@/views/slide23.vue"
import slide24 from "@/views/slide24.vue"






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/Introduction",component:Introduction},
    {path:"/list",component:list},
    {path:"/slide1",component:slide1},
    {path:"/slide2",component:slide2},
    {path:"/slide3",component:slide3},
    {path:"/slide4",component:slide4},
    {path:"/slide5",component:slide5},
    {path:"/slide6",component:slide6},
    {path:"/slide7",component:slide7},
    {path:"/slide8",component:slide8},
    {path:"/slide9",component:slide9},
    {path:"/slide10",component:slide10},
    {path:"/slide11",component:slide11},
    {path:"/slide12",component:slide12},
    {path:"/slide13",component:slide13},
    {path:"/slide14",component:slide14},
    {path:"/slide15",component:slide15},
    {path:"/slide16",component:slide16},
    {path:"/slide17",component:slide17},
    {path:"/slide18",component:slide18},
    {path:"/slide19",component:slide19},
    {path:"/slide20",component:slide20},
    {path:"/slide21",component:slide21},
    {path:"/slide22",component:slide22},
    {path:"/slide23",component:slide23},
    {path:"/slide24",component:slide24},
  ],
})

export default router
