import DefaultTheme from 'vitepress/theme'
import Spotify from "./components/Spotify.vue";
import Mp3 from "./components/Mp3.vue";
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        // register your custom global components
        app.component('Spotify', Spotify)
        app.component('Mp3', Mp3)
    }
}
