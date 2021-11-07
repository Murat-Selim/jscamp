//Asal Sayı Bulma
function findPrime(...numbers) {
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++){
            if(numbers[i] % j  == 0){
                counter++;
            }
        }

        if(counter == 2){
            console.log(numbers[i] + " sayısı asaldır");
        }else{
            console.log(numbers[i] + " sayısı asal değildir")
        }
    }
}

findPrime(3,8,11,21,13)
findPrime(2,8)


//Arkadaş Sayı Bulma
function friendNumber(number1, number2) {
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i  
        }
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            total2 += j
        }
    }

    console.log(number1 + " sayısının bölenleri toplamı: " + total1)
    console.log(number2 + " sayısının bölenleri toplamı: " + total2)

    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayıdır")        
    }else{
        console.log(number1 + " ve " + number2 + " Arkadaş Sayı Değildir.")
    }
}

friendNumber(120,260)


//1000 e kadarki tüm mükemmel sayılar
function perfectNumber() {
    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }

        if (total == i) {
            total = 0
            console.log(i)
        }
    }
}

perfectNumber()


//1000 e kadarki tüm asal sayılar
function primeNumber(number) {
    let counter = 0
    let primeNumbers = []

    for (let i = 2; i < number; i++) {
        let checkPrimeNumber = 0
        for (let j = 2; j <i ; j++) {
            if (i % j == 0) {
                checkPrimeNumber = 1
            }
        }
        
        if (checkPrimeNumber == 0) {
            primeNumbers.push(i)
            counter++
        }
    }

    console.log(primeNumbers)
    console.log("1'den 1000 e kadar olan asal sayıların sayısı: " + counter)
    
}

primeNumber(1000)