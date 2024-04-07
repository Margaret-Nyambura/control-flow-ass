// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function numsoperations(){
    newArr = []
    const arr = [10, 3, 17, 50, 80, 9, 45,20,60];

    let arr1 = arr.slice(0,4);
    let arr2 = arr.slice(-2);

    arr1.forEach (i =>{
        console.log(i * i);
        newArr.push(arr1)
      })

      arr2.forEach(i=>{
        console.log(i + 10);
        newArr.push(arr2)
      })
    }
    numsoperations()

    // Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

    function iterateThrough(){
      let arrNum = [1,2,3,4,5,6,7,8,9];
      const x = arrNum.slice(0,5);

      while(x){
        console.log(x);
        break;
      }

    }
    iterateThrough()

    // Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

    function cont(){
      let fruits= ['apple','plum','banana','strawberries','kiwi'];
      let a = -1;

      while(a < 4){
        a++;
        
        if(a / 2 === 1)
        continue;

        console.log(fruits[a]);
      }

    }
    cont()


    // Write a function that accepts an array of strings and console.logs each element using a for loop.

    function accept(){
      let names = ["cow", "goat", "camel", "donkey", "dog"];

      names.forEach(i =>{
        console.log(i);

      })

    }
    accept()


    // Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

    function reverseit(word){
   while(word){

   break;

   }
   return word.split("").reverse().join('')
      }
console.log(reverseit("Hello"))