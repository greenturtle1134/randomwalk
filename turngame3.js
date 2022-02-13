app = Vue.createApp({
    data() {
        return {
          names: ["Left", "Straight", "Right"],
          used: [false, false, false],
          diceText: "Dice",
          turns: 0,
          rolls: 0,
          five: false,
          currRandom: Math.floor(Math.random()*3),
          nextRandom: Math.floor(Math.random()*3)
        }
    },
    methods: {
        click(i) {
          this.used[i] = true;
          if(this.count == 0) {
            this.used = [false, false, false];
            this.currRandom = this.nextRandom;
            this.nextRandom = Math.floor(Math.random()*3);
          }
          this.diceText = "Dice";
          this.rolled = false;
          this.turns++;
        },
        dice() {
          let choice = [];
          if(this.count == 3 && this.five) {
            for(f in this.used) {
              if(f != this.currRandom){
                choice.push(f);
              }
            }
            if(!this.rolled) {
              let chosen = Math.floor(Math.random()*2);
              this.diceText = "Go " + this.names[choice[chosen]];
              this.rolled = true;
              this.used = [false, false, false];
              this.used[chosen] = true;
              this.rolls++;
            }
          }
          else {
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
        }
    },
    computed: {
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
