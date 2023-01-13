let total = 0;

function add(...nums){
    for(let num of nums){
        total += num
    }

    return total;
}

console.log(add(1,2,3));