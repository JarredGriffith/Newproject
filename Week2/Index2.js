console.log("Hello World")

// this is If stuff 

var Name = "Jarred" //prompt()

if(Name  == "Jarred") { console.log("Hello," 
+ Name);
} 
else if (Name == "Tessa") { console.log("Love you Tessa") ;// you can have Endless ampount of else ifs
}
else { console.log("ew, bad name");
}

/* Loop 
For, While, Do, 

For of loops 
For in Loops
*/ 

let num = 0 ;

for (num == 0; num < 10; num++ ) {
    console.log(num);
}

let guys = ["Jarred", "Mike", "Chase","Spencer"];

for(men in guys) {
console.log(guys[men]);
}

for(men of guys) {
    console.log(guys[men]);
    }
    
//var question = prompt("What is your GF name?", "");

/*function gfName(){
    let question = prompt("What is your GF name?");
    do (prompt(question));
        while (question !== "Tessa"){
            prompt("What is your GF name?")
            continue loop1;
            }    
        if(question == "Tessa"){
            alert("She's hella hot, you're so lucky");
        }
}

 gfName();  */

 var nick = prompt("Please enter your name", "");
 while (nick == "" || nick == null) {
   nick = prompt("Please enter your name", "");
 }