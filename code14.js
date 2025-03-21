let amount = 48504321;
if (amount >=500) {
    console.log("500 Note : "+Math.floor(amount/500));
    amount =amount%500;
    console.log(amount);   
}
if (amount >=200) {
    console.log("200 Note : "+Math.floor(amount/200));
    amount =amount%200;
    console.log(amount);  
}
if (amount>100) {
    console.log("100 Note : "+Math.floor(amount/100));
    amount =amount%100;
    console.log(amount);  
}
if (amount>50) {
    console.log("50 Note : "+Math.floor(amount/50));
    amount=amount%50;
    console.log(amount);  
}

if (amount>20) {
    console.log("20 Note : "+ Math.floor(amount/20));
    amount=amount%20;
    console.log(amount);  
}
if (amount>10) {
    console.log("10 Note : "+Math.floor(amount/10));
    amount = amount%20;
    console.log(amount);  
}

if (amount>5) {
    console.log("5 Note : "+ Math.floor(amount/5));
    amount =amount%5;
    console.log(amount);  
}
if (amount>2) {
    console.log("2 Note : "+ Math.floor(amount/2));
    amount = amount%2;
    console.log(amount);  
}