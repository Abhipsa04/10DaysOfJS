

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = ['a','e','i','o','u'];
    let str = "";
    for(let x of s){
        if(vowel.includes(x))
          console.log(x);
        else{
         str+=x;
         str+="\n"; 
        }

    }
   console.log(str); 
}

