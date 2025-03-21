let unit = 150;
let amount = 0;
if(unit>400) {
    amount+=(unit -400)*13;
    unit =400;
}
if(unit>=200 && unit<=400) {
    amount+=(unit -200)*8;
    unit =200;
}
if(unit>=100 && unit<=200) {
    amount+=(unit -200)*4.5;
    console.log("Amount to be paid : "+ amount);
}

