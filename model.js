
class PlayerCollection {
    constructor() {
        this.playersArray = [];
    }
    addPlayer(id, myname) {
        this.playersArray.push(new Player(id, myname,[], [], [], [], []));
    }
}

class Player {
    constructor(id, name, outArray, out, inArray, inscore, total) {
        this.id = id;
        this.name = name;
        // this.outArray = [];
        // this.out = [];
        // this.inArray = [];
        // this.inscore = [];
    }
    // addOutScore(num) {
    //     this.outArray.push(num);
    // }
    // addInScore(num) {
    //     this.inArray.push(num);
    // }
    // outScore(num) {
    //     this.out.splice(0, 1, num);
    //     //this.out.push(num);
    // }
    // inScore(num) {
    //     this.inArray.splice(0, 1, num)
    // }
    // totalScore(num) {
    //     this.total.splice(0, 1, num);
    // }


}

let playerX = new PlayerCollection();

