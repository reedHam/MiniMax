/*
    Player(s) = node.state
    Action(s) = node.children
    Result(a, s) = node.children[i]
    Terminal test = node.children.length == 0
    Utility(s) = node.value
*/


function miniMax(nodeState, alpha, beta){
    
    // return utility if terminal
    if (nodeState.children.length == 0){
        
        return nodeState.value;
    }

    // find max miniMax for children
    if(nodeState.state == playerTurns.Max){
        var maxVal = negInfinity;
        nodeState.children.some(function (child) {
            let val = miniMax(child, alpha, beta);
            maxVal = Math.max(maxVal, val);
            alpha = Math.max(maxVal, alpha);

            return beta <= alpha;
        });
        return maxVal;
    }

    // find max miniMax for children
    if(nodeState.state == playerTurns.Min){
        var minVal = Infinity;
        nodeState.children.some(function (child) {
            let val = miniMax(child, alpha, beta);
            minVal = Math.min(minVal, val);
            beta = Math.min(minVal, beta);

            return beta <= alpha;
        });
        return minVal;
    }
}