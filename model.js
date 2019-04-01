
class PlayerCollection {
    constructor() {
        this.playersArray = [];
        this.playerScoreArray = [];
    }
    addPlayer(id, myname) {
        this.playersArray.push(new Player(id, myname, this.playerScoreArray));

    }

    addScore(num) {
        this.playerScoreArray.push(num);
    }
}


class Player {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }

}

let playerX = new PlayerCollection();