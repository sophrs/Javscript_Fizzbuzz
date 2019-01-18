
let number = 20;
let divide3 = "Fizz";
let divide5 = "Buzz";

function fizzBuzz(number, divide3, divide5){
    for(let i = 0; i<number; i++){
         if(i % 3 == 0 && i % 5 ==0){
             document.write(divide3 + divide5);
         }
         else if(i % 3 === 0){
           document.write(divide3);
         }
         else if(i % 5 === 0){
          document.write(divide5);
         }
         else{
          document.write(i + " ");
            }
        }
}