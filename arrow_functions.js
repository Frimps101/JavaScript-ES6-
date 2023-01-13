let total = 0;

const add = (...nums)=>{
    for(let num of nums){
        total += num
    }
    return total;
}

console.log(add(2,4,6))