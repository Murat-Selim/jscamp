function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi : urun : " + productName + " adet " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = () => {
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice){
   console.log(productName)
}

addToCart2("Elma", 2, 20)
addToCart2("Armut", 3, 30)
addToCart2("Limon", 3, 15)

let product1 = {productName: "Elma", unitPrice:10, quantity:5}

function addToCart3(product){
    console.log("Urun : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
    
}

addToCart3(product1)

let product2 = {productName: "Elma", unitPrice:10, quantity:5}
let product3 = {productName: "Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Elma", unitPrice:10, quantity:5}
]

addToCart4(products)

//rest

function add(bisey, ...numbers){ //rest
   let total = 0;
   for (let i=0; i<numbers.length; i++){
       total = total + numbers[i]
   }
   console.log(total)
   console.log(bisey)
}

add(20,30)
//add(20, 30 ,40)
//add(20, 30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

//destructions
let [icAdadolu, marmara, karadeniz, [icAdadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"Ic Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(icAdadolu.name)
//console.log(marmara.population)
console.log(icAdadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName: "Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


