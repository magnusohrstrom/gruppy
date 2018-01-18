//Feature: 

/* 
Scenario: 
Given that there are 6 hungry persons
When we buy pizza 
Then we should be served 2 pizzas.
*/

describe('pizzaCalculator',()=>{
    it('should return 2 pizzas for 6 people', () => {
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.pizzaCalc(6)).toEqual(2);
    });
    it('should return 1 pizzas for 2 people', () => {
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.pizzaCalc(2)).toEqual(1);
    });
    it('should return 7 pizzas for 20 people', () => {
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
    it('should 3 people buy pizza, they would get 1.5 l of sodas', ()=>{
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.drinkCalc(3)).toEqual({
            bigbottles: 1,
            smallBottles:1
        });
    })
    it('should 4 people buy pizza, they would get 2 l of sodas', ()=>{
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.drinkCalc(4)).toEqual({
            bigbottles: 2,
            smallBottles:0
        });
    });
    it('should 7 people buy pizza, they would get 3.5 l of sodas', ()=>{
        const pizza = require('../src/pizzaCalculator');
        expect(pizza.drinkCalc(7)).toEqual({
            bigbottles: 3,
            smallBottles:1
        });
    });
});


/* 

Scenario: 
Given that there are 6 hungry persons
When we buy pizza 
Then we should have to buy 2 pizzas.

*/