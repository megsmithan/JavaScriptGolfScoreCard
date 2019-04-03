
class PlayerCollection {
    constructor() {
        this.playersArray = [];
       // this.playerScoreArray = [];
    }
    addPlayer(id, myname) {
        this.playersArray.push(new Player(id, myname,[]));
    }
}

class Player {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = [];
    }
    addScore(num) {
        this.score.push(num);
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