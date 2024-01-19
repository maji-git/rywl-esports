import MainPage from "./pages/main.vue"
import BracketPage from "./pages/bracket.vue"

export default [
    { path: '/', component: MainPage },
    { path: '/bracket/:id', component: BracketPage },
]