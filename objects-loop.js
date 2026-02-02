// for loop


const numbers = [1,2,3,4,5,6,7,201]
for(const num of numbers){
    // console.log(num)
}


const Fruits ={
    name: 'Mango',
    price: 11600,
    quantity: "10Kg",
    Country: 'Bangladesh',
    color: 'Yellow'

}

const keys = Object.keys(Fruits)
console.log(keys)
for(const key of keys){
    const value = Fruits[key]
    console.log(value)
}
