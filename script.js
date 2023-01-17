let beatles = ['John', 'Paul', 'George', 'Ringo']
beatles[5] = "the cool beatle";
document.getElementById('original').innerHTML = beatles
beatles[4] = "Tiziano";


// Exercise 1

document.getElementById("array-ex1").innerHTML = beatles[1] +", "+ beatles[3];
console.log(beatles);


// Exercise 2
document.getElementById("array-ex2").innerHTML = "";
for(let i = 0; i < 5; i++){
    document.getElementById("array-ex2").innerHTML += " " + beatles[i];
}

// Exercise 3 
beatles[4] = "The secret Beatle";
document.getElementById("array-ex3").innerHTML = "";
for(let i = 0; i <= 5; i++){
    document.getElementById("array-ex3").innerHTML += " " + beatles[i] ;
}

// Exercise 4 

 //beatles[10] = "The Biggest Beatle";
 beatles.push('The Biggest Beatle')
 document.getElementById("array-ex4").innerHTML = "";
 for(let i = 0; i < beatles.length; i++){
    if(beatles[i] != null){
        document.getElementById("array-ex4").innerHTML += " " + beatles[i] ;
        }
 }
    
// Exercise 5

document.getElementById("array-ex5").innerHTML = `The array has a length of: ${beatles.length}`;

// Exercise 6

beatles.sort();
document.getElementById("array-ex6").innerHTML = beatles;
beatles.reverse();
document.getElementById("array-ex6").innerHTML += beatles;

