let array = [1,3,7,5,2]

// let z = array.some(function even(x){
//     if(x%2==0) return true;
//     else return false;
// });

let z = array.every(function even(x){
    if(x%2==0) return true;
    else return false;
});

console.log(z)