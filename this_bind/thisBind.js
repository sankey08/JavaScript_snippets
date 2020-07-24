let eat = function(){
    console.log(this.food);
}

let drinkFun = function(){
    console.log(this.drink);
}

let food = {
    Eat : eat,          //assigning eat function to the property
    food: 'You should eat healthy food ;)'  
}

food.Eat()      //Calling property (infers in context of object literal food)
eat()           //undefined as it will have global context

let drinks = {
    drink: 'You should drink 2L to 3L of water daily :)'  
}

drinks.Drink = drinkFun.bind(drinks)  //Create new property and bind states that this belongs and refer to the food object
let drinkVariable = drinks.Drink       //drinkVariable has been bound 
drinkVariable()
drinkFun()      //undefined as it will have global context
