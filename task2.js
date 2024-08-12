//task[7-08-24]

//Right angled triangle

let x = 90;
if(x == 90){
    console.log("It is a right angled triangle");
}
else
{
    console.log("It is not a right angled triangle");
}

// square of 2 

let x1 = 40;
if((x1 & (x1-1))==0){
    console.log(" It is a power of 2");
}
else{
    console.log(" It is not power of 2");
}

// person is eligible based on these conditions
   
    let  credit = 700;
    let  income = 40000;
    let  annual = 23000;
    if((credit>=600) && (income>=40000) && (annual <= (income/2))){
        console.log("person is eligible");
    }
    else 
    {
        console.log("person is not eligible");
    }