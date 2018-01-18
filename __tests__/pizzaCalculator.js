//Feature:

/* 
Scenario: 
Given that there are 6 hungry persons
When we buy pizza 
Then we should be served 2 pizzas.
*/

describe('pizzaCalculator',()=>{
    it('should return 2 pizzas for 6 people', () => {
        const pizzaEaters = 6;
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.pizzaCalc(6)).toEqual(2);
    });
    it('should return 1 pizzas for 2 people', () => {
        const pizzaEaters = 6;
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.pizzaCalc(2)).toEqual(1);
    });
    it('should return 7 pizzas for 20 people', () => {
        const pizzaEaters = 6;
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.pizzaCalc(20)).toEqual(7);
    });
});  


/* 

Scenario: 
Given that there are 6 hungry persons
When we buy pizza 
Then we should have to buy 2 pizzas.

*/