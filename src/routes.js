import Home from './components/Home.vue'
import Post from './components/Post.vue'
import List from './components/List.vue'
import NotFound from './components/NotFound.vue'

export const routes =[
    {path:'/',component:Home},
    {path:'/post',component:Post},
    {path:'/list',component:List},
    {path:'/post/:id',component:Post},
	{path:'*',component:NotFound}
]