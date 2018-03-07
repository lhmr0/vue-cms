import Home from './components/Home.vue'
import Post from './components/Post.vue'
import NotFound from './components/NotFound.vue'

export const routes =[
    {path:'/',component:Home},
    {path:'/post/:id',component:Post},
	{path:'*',component:NotFound}
]