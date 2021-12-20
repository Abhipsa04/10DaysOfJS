

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
try
{
   var splitarr = s.split("");
   var rev = splitarr.reverse();
   var revarr = rev.join("");
   console.log(revarr);
}
catch(e){
    console.log(e.message);
    console.log(s);
    
}

    
}

