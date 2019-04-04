
class PlayerCollection {
    constructor() {
        this.playersArray = [];
       // this.playerScoreArray = [];
    }
    addPlayer(id, myname) {
        this.playersArray.push(new Player(id, myname,[], [], [], []));
    }
}

class Player {
    constructor(id, name, score, out, inscore, total) {
        this.id = id;
        this.name = name;
        this.score = [];
        this.out = [];
    }
    addScore(num) {
        this.score.push(num);
    }
    outScore(num) {
        this.out.splice(0, 1, num);
        //this.out.push(num);
    }
    inScore(num) {
        this.inscore.splice(0, 1, num)
    }
    totalScore(num) {
        this.total.splice(0, 1, num);
    }

}

let playerX = new PlayerCollection();


class HoleCollection{
    constructor() {

    }

}

class Holes {
    constructor(id, score) {
        this.id = id;
        this.score = score;
    }
}