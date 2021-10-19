app = Vue.createApp({
    data() {
        return {
			maxNum: 0,
			onNum: 0,
			statusText: "Generator ready."
        }
    },
    methods: {
        click(e) {
			this.statusText = "Generating...";
			this.maxNum = parseInt(e.target.getAttribute("data-number"));
			this.onNum = Math.floor(Math.random() * this.maxNum)+1;
			let today = new Date();
			this.statusText = "Last generated " + today.toISOString();
        }
    }
}).mount('#app');