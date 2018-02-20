/*
    Player(s) = node.state
    Action(s) = node.children
    Result(a, s) = node.children[i]
    Terminal test = node.children.length == 0
    Utility(s) = node.value
*/


function miniMax(nodeState){
    // return utility if terminal
    if (nodeState.children.length == 0){
        return nodeState.value;
    }

    // find max miniMax for children
    if(nodeState.state == playerTurns.Max){
        let maxArray = [];
        nodeState.children.forEach(element => {
            maxArray.push(miniMax(element));
        });
        return Math.max.apply(Math, maxArray);
    }

    // find max miniMax for children
    if(nodeState.state == playerTurns.Min){
        let minArray = [];
        nodeState.children.forEach(element => {
            minArray.push(miniMax(element));
        });
        return Math.min.apply(Math, minArray);
    }
}