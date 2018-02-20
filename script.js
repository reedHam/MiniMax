var playerTurns = {
    Max: "max",
    Min: "min"
}

// init game tree
var Root = new GameNode("A", playerTurns.Max);

Root.addNode("B", playerTurns.Min);
Root.addNode("C", playerTurns.Min);
Root.addNode("D", playerTurns.Min);

Root.children[0].addNode("E", playerTurns.Max).value = 3;
Root.children[0].addNode("F", playerTurns.Max).value = 12;
Root.children[0].addNode("G", playerTurns.Max).value = 8;

Root.children[1].addNode("H", playerTurns.Max).value = 2;
Root.children[1].addNode("I", playerTurns.Max).value = 4;
Root.children[1].addNode("J", playerTurns.Max).value = 6;

Root.children[2].addNode("L", playerTurns.Max).value = 14;
Root.children[2].addNode("M", playerTurns.Max).value = 5;
Root.children[2].addNode("N", playerTurns.Max).value = 2;

// DEBUG
function printTree(node){
    console.log(node.name, node.value);
    if(node.children.length > 0){
        node.children.forEach(element => {
            printTree(element);
        });
    }
}


printTree(Root);

console.log(miniMax(Root));