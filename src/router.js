import Home from './pages/home'
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
const routes=[
    {
        id:1,
        path:'/home',
        component:Home,
        text:'主页',
        icon:'qq'
    },
    {
        id:2,
        path:'/page1',
        component:Page1,
        text:"主页1",
        icon: 'ie'
    },
    {
        id:3,
        path:'/page2',
        component:Page2,
        text:"主页2",
        icon: 'apple'
    }
]
export default routes