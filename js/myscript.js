// scrivere programma che stampi i numeri in console da 1 a 100
let i = 1;
const container = document.querySelector(".container");
for (i = 1; i <= 100; i++) {
    console.log(i)
    let square;
    // i multipli di 3 colorarli con fizz, multipli 5 buzz multipli entambi fizzbuzz
    if (i % 3==0 && i % 5==0) {
        square = `<div class="fizzbuzz justify-content-center align-items-center flex-wrap box mx-3 my-3">`;
        console.log("fizzbuzz");
    }
    
    else if (i % 5==0) {
        square = `<div class="buzz justify-content-center align-items-center flex-wrap box mx-3 my-3">`; 
        console.log("buzz");
    }

    else if ( i % 3==0) {
        square = `<div class="fizz justify-content-center align-items-center flex-wrap box mx-3 my-3">`;
        console.log("fizz");
    }

    else {
        square = `<div class="justify-content-center align-items-center flex-wrap box mx-3 my-3">`;
    }

    container.innerHTML += square;
}

