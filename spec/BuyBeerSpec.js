describe('test canBuyBeer',()=>{
    describe('check canBuyBeer function to return true if age is >17',()=>{
        it ('should return true if age is >18',()=>{
            expect(canBuyBeer(19)).toBe(true);
            expect(canBuyBeer(45)).toBe(true);
        });
    });

    describe('check canBuyBeer function to return false if age is <17',()=>{
        it ('should return false if age is <18',()=>{
            expect(canBuyBeer(17)).toBe(false);
            expect(canBuyBeer(5)).toBe(false);
        });
    });

});

describe('test cangregBuyBeer function',()=>{
    describe('when greg age is 18',()=>{
        it('should return "greg age is 18, he can buy beer!"',()=>{
            const age= greg.age;
            greg.age= 18;
            const result= canGregBuyBeer();
            expect(canGregBuyBeer() ).toBe('Greg is 18, he can buy beer!');
            greg.age= age;
        });
    });
    describe('when greg age is 16',()=>{
        it('should return "greg age is 16, he cant buy beer"',()=>{
            const age= greg.age;
            greg.age= 16;
            const result= canGregBuyBeer();
            expect(result).toBe(`Greg is 16, he can't buy beer!`);
            greg.age= age;
        });
    });
    
})