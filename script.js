let ag=12;
if(ag>=18)
{
    console.log("you can vote");
}
else{
    console.log("you cant vote");
}
//nested if else//
let score=95;
if(score>=80)
{
    console.log("destination");
}
 else if(score>75)
{
    console.log("first class");
}
else if(score >=50)
{
    console.log("second class");
}
else if(score>=35)
{
    console.log("third class");
}
else if(score<=35)
{
    console.log("fail");
}
//switch statement//
let month="sept";
switch(month)
{
    case "jan":
    console.log("jan");
    break;
    case "feb":
    console.log("feb");
    break;
    case "march":
    console.log("march");
    break;
    case "april":
    console.log("april");
    break;
    case "may":
    console.log("may");
    break;
    case "june":
    console.log("june");
    break;
    case "july":
    console.log("july");
    break;
    case "august":
    console.log("aug");
    break;
    case "sept":
    console.log("september");
    break
    case "oct":
    console.log("oct");
    break;
    case "nov":
    console.log("nov");
    break;
    case "dec":
    console.log("dec");
    break;

    default:
    console.log("invalid choice try again");
    break;
}
//ternary operatore//
let age=16;
let status=(age>=18)? "you are allow for pancard":"you are not allow for pancard";
console.log(status);
//for loop//
for(let i=1; i<=5;i++)
{
    console.log("for loop: "+i);
}
//while loop//
let j=1;    
while(j<=5)
{
    console.log("while loop: "+j);
    j++;
}
//do while loop//
let k=1;        
do{
    console.log("do-while loop: "+k);
    k++;
}while(k<=5)
    //while loop continue//

let m=1;
while(m<=5)
{
    if(m==3)
    {
        m++;
        continue;
    }
    console.log("while loop continue: "+m);
    m++;
}
//while loop break//
let n=1;    
while(n<=5)
{
    if(n==3)
    {
        break;
    }
    console.log("while loop break: "+n);
    n++;
}
