// scrivere programma che stampi i numeri in console da 1 a 100

// const ul = document.querySelector ("ul.list")
// const li = document.createElement ("li")
for ( let i = 1; i <= 100; i++) {
    const multiplo3 = 3;
    const multiplo5 = 5;
    const multiplo3_5 = 15;
    const ul = document.querySelector ("ul.list")
    const li = document.createElement ("li")
    console.log(i);
    li.append(i);
    ul.append(li);
    if (i % multiplo3==0) {
        li.append("fizz");
        ul.append(li);
    }

    else if (i % multiplo5==0) {
        li.append("buzz");
        ul.append(li);    
    }

    else if (i % multiplo3_5==0) {
        li.append("fizz" + "buzz");
        ul.append(li); 
    }
    
}
// i multipli di 3 colorarli con fizz, multipli 5 buzz multipli entambi fizzbuzz
// appendi elementi nel dom
// stile diverso per i multipli