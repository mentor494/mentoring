
class PrimeNumbersIterator{
    constructor() {
        this.currentNumber = null;
        this.previousPrimes = []
    }

    isPrime(number){
        var index = 0;

        for (let i = 0; i < this.previousPrimes.length; i++) {
            let divide = this.previousPrimes[i];
            if(number % divide ===0){
                return false
            }
        }
        return true
    }

    next(){
        if(!this.currentNumber){
            this.currentNumber = 2;
            return this.currentNumber;
        }

        this.previousPrimes.push(this.currentNumber)

        let potentialPrime = this.currentNumber+1

        while(!this.isPrime(potentialPrime)){
            potentialPrime = potentialPrime+1;
        }

        this.currentNumber = potentialPrime
        return this.currentNumber
    }
}


class OddNumbersIterator{
    constructor() {
        this.currentNumber = null;
    }


    next(){
        if(!this.currentNumber){
            this.currentNumber = 1;
            return this.currentNumber;
        }

        this.currentNumber = this.currentNumber+2
        return this.currentNumber
    }

}


let it = new PrimeNumbersIterator();



function printFirstFiveNumber(iterator){
    for(i=0; i<5; i++){
        console.log(iterator.next())
    }
}


printFirstFiveNumber(new PrimeNumbersIterator())

printFirstFiveNumber(new OddNumbersIterator())
