module.exports = {
    pizzaCalc(people){ 
        let result = Math.ceil(people/3);
        return result;
    },
    drinkCalc (people) {
    let drnks = (people/2);
    if (people%2==0){
        return {
            bigbottles: drnks,
            smallBottles:0
        };;        
    }
    else{
         let bigBottles= Math.floor(drnks);
         let smallBottles = Math.floor(drnks%2);
         return {
                    bigbottles: bigBottles,
                    smallBottles:smallBottles
                };
       }
    }
    
}