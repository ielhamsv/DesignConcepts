import { createRouter, createWebHistory } from 'vue-router'
import Introduction from "@/views/Introduction.vue";
import list from "@/views/list.vue"
import slide1 from "@/views/slide1.vue"
import slide2 from "@/views/slide2.vue"
import slide3 from "@/views/slide3.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/Introduction",component:Introduction},
    {path:"/list",component:list},
    {path:"/slide1",component:slide1},
    {path:"/slide2",component:slide2},
    {path:"/slide3",component:slide3},
  ],
})

export default router
