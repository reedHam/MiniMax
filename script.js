var playerTurns = {
    Max: "max",
    Min: "min"
}
var negInfinity = Number.NEGATIVE_INFINITY;
var infinity = Infinity;
// init game tree
var Root = new GameNode("A", playerTurns.Max);

Root.addNode("B", playerTurns.Min);
Root.addNode("C", playerTurns.Min);

// B
Root.children[0].addNode("D", playerTurns.Max);
Root.children[0].addNode("E", playerTurns.Max);

// D
Root.children[0].children[0].addNode("", playerTurns.min).value = 3;
Root.children[0].children[0].addNode("", playerTurns.min).value = 5;

// E
Root.children[0].children[1].addNode("", playerTurns.min).value = 6;
Root.children[0].children[1].addNode("", playerTurns.min).value = 9;

// C
Root.children[1].addNode("F", playerTurns.Max);
Root.children[1].addNode("G", playerTurns.Max);

// F
Root.children[1].children[0].addNode("", playerTurns.min).value = 1;
Root.children[1].children[0].addNode("", playerTurns.min).value = 2;

// G
Root.children[1].children[1].addNode("", playerTurns.min).value = 0;
Root.children[1].children[1].addNode("", playerTurns.min).value = -1;


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

console.log(miniMax(Root, negInfinity, infinity));