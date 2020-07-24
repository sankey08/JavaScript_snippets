sayName("Sanket");              //Pushes to the current execution stack

//Creates a global execution context
function sayName(a) {
    console.log(`Hello ${a} , Execution Context is running...`);        
}

console.log(name);          //Variables are undefined 
var name = "sanket";        //Global Context as it knows the name exists but not available

//funcName();                 //Will return error as variables are just scanned and made it undefined at the execution context

var funcName = function () {
    console.log(` Hello `);
};


function myName() {
    var name = "ADAM";
    console.log(`Hello ${name}`);
}
myName();

console.log(name);


/*

Output:
Hello Sanket , Execution Context is running...
undefined
Hello ADAM
sanket


*/


/**
 HERE THE EXECUTION STACK COULD BE LIKE

            ****************                
    ---->   *   SayName()  *
            ****************
            *   myName()   *
        **************************
        *Global Execution Context*
        **************************


            ****************
    ---->   *   myName()   *
        **************************
        *Global Execution Context*
        **************************


        **************************
        *Global Execution Context*
        **************************
*/
