//simple Object literal that returns a String value only.
function getFood(type){
    var foods = {
        'misal' : 'Misal',
        'vadapav' : 'Vadapav',
        'idli' : 'Idli',
        'default' : 'Well have some CHAI and decide ;)'
    };

    return `I will love to eat ${foods[type]} 
You have good essence of Food ;^)`;
}

var food = getFood('misal'); 

console.log(food);      

/* 
Output :
I will love to eat Misal
You have good essence of Food ;^)
*/

//---------------------------------------------------------------------------------------

//Creating Object Literals which return the strings from the newly created function:
var type = 'adventure';

var games = {
    'action' : function() {
        return 'Action';
    },
    'adventure' : function() {
        return 'Adventures';
    },
    'shooting' : function() {
        return 'PUBG';
    }
};

console.log(games[type]());         // Calling Object Literals function

/*
Output:
Adventures
*/

//---------------------------------------------------------------------------------------

/* Usually, we would put a switch inside a function and get a return value, 
so let’s do the same here and turn an Object literal lookup into a usable function:
*/
function getDrink(type) {
    var drinks = {
      'coke': function () {
        return 'Coke';
      },
      'pepsi': function () {
        return 'Pepsi';
      },
      'lemonade': function () {
        return 'Lemonade';
      },
      'default': function () {
        return 'Default item';
      }
    };
    return (drinks[type] || drinks['default'])();
  }

  //Chosing the type
  var drink = getDrink('coke');
  
  console.log(drink);
 /*
 Output:
 Coke 
 */ 

 /*
 Final Output:
 I will love to eat Misal
You have good essence of Food ;^)
Adventures
Coke
 */
