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

Feature: 
Given that 6 people want to gorge in pizzapie
when they are thirsty
then they should get 3 l of sodapopins.

*/

describe('drinks with that?', () => {
    it('should 6 people buy pizza, they would get 3 l of sodas', ()=>{
        const pizzaEaters = 6;
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.drinkCalc(6)).toEqual({
            bigbottles: 3,
            smallBottles:0
        });
    })
});


/* 

Scenario: 
Given that there are 6 hungry persons
When we buy pizza 
Then we should have to buy 2 pizzas.

*/