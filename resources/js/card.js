Nova.booting((Vue, router) => {
	Vue.config.devtools = true;
    Vue.component('inspire', require('./components/Card'));
})
