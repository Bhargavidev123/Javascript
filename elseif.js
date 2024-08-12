 //else if ladder

     //fare for a taxi rade based on the distance
     let ride=45;
     if(ride<=5){
       console.log(`$5`);
       }
       else if(ride>=6 && ride<=10){
        console.log(`$10`);
       }
       else if(ride>=11 && ride<=20){
        console.log(`$20`);
        }
        else if(ride==20){
            console.log(`$30`);
        }
        else{
            console.log(`$30+$5`);
        }

        //to determine discount on a product based on the quantity
        let discount=20;
        if(discount >=1 && discount <=5){
            console.log(`No discount`);
         }
         else if(discount >=6 && discount <=10){
            console.log(`5% discount`);
         }
         else if(discount >=11 && discount <=20){
            console.log(`10% discount`);   
         }
         else if(discount >20){
            console.log(`15% discount`);
            
         }
         else{
            console.log(`invalid discount`);
            
         }