// scope levels
// block scope and global scope 
let a = 20;
const b = 20;
var c = 35;

// console.log(a);
// console.log(b);
// console.log(c);

function one ( ){
    const name = " Web"

    function two (){
        const web = " VsCode"
        console.log(name);

         console.log(web);
    }
   
    two()
    
}
one()