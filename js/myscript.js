// scrivere programma che stampi i numeri in console da 1 a 100
let i = 1;
let container = document.querySelector(".container");
for (i = 1; i <= 100; i++) {
    console.log(i)
    let square;
    // i multipli di 3 colorarli con fizz, multipli 5 buzz multipli entambi fizzbuzz
    if (i % 3==0 && i % 5==0) {
        square = `<div class="fizzbuzz justify-content-center align-items-center flex-wrap box mx-3 my-3"> fizzbuzz`;
        console.log("fizzbuzz");
        container.innerHTML += square;
    }
    
    else if (i % 5==0) {
        square = `<div class="buzz justify-content-center align-items-center flex-wrap box mx-3 my-3"> buzz`; 
        console.log("buzz");
        container.innerHTML += square;
    }

    else if ( i % 3==0) {
        square = `<div class="fizz justify-content-center align-items-center flex-wrap box mx-3 my-3"> fizz`;
        console.log("fizz");
        container.innerHTML += square;
    }

    else {
        square = `<div class="justify-content-center align-items-center flex-wrap box mx-3 my-3"> ${i}`;
        container.innerHTML += square;
    }

    
}

