app = Vue.createApp({
    data() {
        return {
          names: ["Left", "Straight", "Right"],
          used: [false, false, false],
          diceText: "Dice",
          turns: 0,
          rolls: 0
        }
    },
    methods: {
        click(i) {
          this.used[i] = true;
          if(this.count == 0) {
            this.used = [false, false, false];
          }
          this.diceText = "Dice";
          this.rolled = false;
          this.turns++;
        },
        dice() {
          let choice = [];
          for(f in this.used) {
            if(this.used[f]){
              choice.push(f);
            }
          }
          if(choice.length == 2 && !this.rolled) {
            this.diceText = "Go " + this.names[choice[Math.floor(Math.random()*2)]];
            this.rolled = true;
            this.used = [false, false, false];
            this.rolls++;
          }
        }
    },
    computed: {
      // a computed getter
      count() {
        let i = 0;
        for(f in this.used) {
          if(!this.used[f]){
            i++;
          }
        }
        return i;
      }
    }
}).mount('#app');
