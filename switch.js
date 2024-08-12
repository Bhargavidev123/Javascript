//Switch statement

         //detremine the type of coffee based on the user's selection

         let coffee=3;
         switch(coffee){
            case 1:console.log("Espresso is a coffee");
            break;
            case 2:console.log("Cappuccino is a coffee");
            break;
            case 3:console.log("Latte is a coffee");
            break;
            case 4:console.log("Mocha is a coffee");
            break;
            default:console.log("invalid");
         }

         //t0 determine the shipping cost based on the region

         let region="Europe";
         switch(region){
            case "North America":console.log(`$10`);
            break;
            case "South Amaerica":console.log(`20`);
            break;
            case "Europe":console.log(`$30`);
            break;
            case "Asia":console.log("$40");
            break;
            case "Australia":console.log("$50");
            break;
            default:console.log("invalid");
         }
