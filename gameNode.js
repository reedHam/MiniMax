class GameNode {
    constructor(name, state){
        this.name = name;
        this.state = state;
        this.parent = null;
        this.children = [];
        this.value = null;
    }

    addNode(name, state) {
        var newNode = new GameNode(name, state)
        this.children.push(newNode);
        return newNode;
    }
}