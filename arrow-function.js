// function declaration
function add(point1, point2){
    return point1 + point2;
}

// function expression
const adds = function(point1, point2){
    return point1 + point2;
}

// arrow function
const additions = (point1, point2, point3) => point1 + point2 + point3;
const result = additions(20, 30, 40);
console.log(result);