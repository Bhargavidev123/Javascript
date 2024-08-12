
    //for loop
// sum of even numbers betweem 1 &100
   
    let sum=0;
    for(i=1;i<=100;i++){
        if(i%2==0){
            sum=sum+i;
           }
    } 
    console.log(sum); 
   

    // sum of even numbers betweem 1&50
     let x=0;
     for(i=1;i<=50;i++){
        if(i%2==0){
            x=x+i;
        }
     }
     console.log(x);

     //factorial of 5
     let n=1;
     let num = 5;
     for(i=1;i<=num;i++){
        n=n*i;
     }
     console.log(n); 


     //factorial of 3
     let n1=1;
     let num1 = 3;
     for(i=1;i<=num1;i++){
        n1=n1*i;
     }
     console.log(n1);

     //number of digits in 123

     arr=[1,2,3]
     result = 0;
     for(i=0;i<=arr.length;i++){
        result=i;
     }
     console.log(result)
     
     
     // number of digits in 4567
     arr=[4,5,6,7]
     result = 0;
     for(i=0;i<=arr.length;i++){
        result=i;
     }
     console.log(result)
           

                              //   for loop :date 09-08-2024

     //print the square of each number from 1 to 10

     let v=1;
     for(i=1;i<=10;i++){
      v=i**2;
      console.log(v)
     }

   //   find the sum of all numbers from 1 to 20 that are divisible by 3

     let v1=0;
     for(i=1;i<=20;i++){
      if(i%3==0){
         console.log(i);
         v1=v1+i;
         console.log(`sum of nums from 1-20:${i}`);
      }
     }
    
   //   print the cube of each number from 1 to 15

     let v2=1;
     for(i=1;i<=15;i++){
      v2=i**3;
      console.log(v2)
     }

   //   Do-while loop
   //   to print the numbers from 10 to 1 in reverse order
     let number=10;
     do{
      console.log(number);
      number--;
     }while(number>=1);

   //   program to find the product of all numbersfrom 1 to 12
     let number1=1;
     let product=1
     do{
      product *=number1;
      number1++;
     }while(number1<=12)
      console.log(product);

      // program to print numbers frpm 20 to 1 in reverse order in alternate order

      let num2 = 20;
      do{
         console.log(num2);  
         num2=num2-2;
      }while(num2>=1);

      // print 1to 20 but which is divisible by 5 skip that numbers
      let s=1;
      while(s<=20){
         if((s%5 !=0)){
            console.log(s);
         }
         s++;
      }

      // find the sum of all numbers from 1 to 30 that are divisible by 4
      let s1=0;
      let sum1=0;
      while(s1<=30){
         if((s1%4 ==0)){
              sum1+=s1;
         }
           s1++;
      }
      console.log(sum1);

      // print numbers from 50 to 1 in reverse order but only print that are divisible by 3
      let s2=50;
      while(s2>=1){
         if((s2%3 ==0)){
            console.log(s2);
               
         }
         s2--;
      }
     
     
         


    

     



    

       
     
     
    

    