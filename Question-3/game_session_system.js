class Player {
    constructor(name, skillLevel) {
        this.name = name;
        this.skillLevel = skillLevel;
        this.chatGroup = null;
    }
    joinChatGroup(group) {
        this.chatGroup = group;
        group.addPlayer(this);
    }
}
class ChatGroup {
    constructor(skillLevel) {
        this.skillLevel = skillLevel;
        this.players = [];
    }
    addPlayer(player) {
        if (player.skillLevel === this.skillLevel) {
            this.players.push(player);
            console.log(`${player.name} joined the chat group for skill level ${this.skillLevel}`);
        } else {
            console.log(`${player.name} does not match the skill level of this group.`);
        }
    }
    checkBribery() {
      
        const briberyDetected = Math.random() < 0.1; 
        return briberyDetected ? "Bribery detected!" : "No bribery detected.";
    }
}

const player1 = new Player("Alice", 5);
const player2 = new Player("Bob", 5);
const player3 = new Player("Charlie", 6);
const group5 = new ChatGroup(5);
const group6 = new ChatGroup(6);
player1.joinChatGroup(group5);
player2.joinChatGroup(group5);
player3.joinChatGroup(group6);
console.log(group5.players);
console.log(group6.players);
console.log(group5.checkBribery());






