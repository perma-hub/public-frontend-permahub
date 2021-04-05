import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";

export default ({
    Vue,      // the version of Vue being used in the VuePress app
    options,  // the options for the root Vue instance
    router,   // the router instance for the app
    siteData,  // site metadata
}) => {
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: '#8BC34A',
                    accent: '#2E7D32',
                    secondary: '#FFC107',
                    success: '#00FFDC',
                    info: '#00DDFF',
                    warning: '#FB8C00',
                    error: '#F44336'
                },
                light: {
                    primary: '#9CCC65',
                    accent: '#2E7D32',
                    secondary: '#FFE082',
                    success: '#00BFA5',
                    info: '#00B8D4',
                    warning: '#FFAB00',
                    error: '#FF5252'
                }
            }
        }
    })
}
