import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	breakpoint: {
		mobileBreakpoint: 600,
	},
	theme: {
		themes: {
			light: {
				primary: '#f1dd72',
				secondary: '#126707',
			},
		},
	},
});
