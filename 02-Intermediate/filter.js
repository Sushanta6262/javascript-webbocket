//filter

const myArray=[1,2,3,4,5,6,7,8]
// const myFilterArray = myArray.filter((item)=> {
//     return item > 4

// })
// console.log(myFilterArray)

//filtering using forEach

const filterArray = myArray.forEach((data)=>{
    if(data>5)
    {
        console.log(data)
    }
})
//map method

const arrayNumbs = [2,4,6,8,10]
const changedArray = arrayNumbs.map ((value) => {
    return value + 2;
})
console.log(changedArray);

//chaining
const chainingArray = [3,4,5,6,7,8,9,10]
const updatedArray = chainingArray
.map((data))