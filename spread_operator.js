let example1 = [1,2,3,4,5,6]
let example2 = [...example1]

// for(let num of example2){
//     console.log(num)
// }
// example2.push(true)
// console.log(example2)

let info = {
    firstName: "Jo",
    lastName: "Kwakye"
}

let info2 = {
    ...info
}

console.log(info2)