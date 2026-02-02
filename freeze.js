const Fruits ={
    name: 'Mango',
    price: 11600,
    quantity: "10Kg",
    Country: 'Bangladesh',
    color: 'Yellow'

}
Object.freeze(Fruits)

// delete Fruits.Country

Fruits.price = Fruits.price + 2000;

console.log(Fruits)