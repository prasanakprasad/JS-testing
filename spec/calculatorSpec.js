describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
        /* expect(calculator.add('1',2)).toThrow();
        expect(calculator.add(1,'2')).toThrow(); */
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });

  describe('#subtract',() => {
    describe('when passed a string as a number',()=> {
      it('should throw an error',()=>{
        const calculator = new Calculator();
        expect(()=> calculator.subtract('1',2)).toThrow();
        expect(()=> calculator.subtract(1,'2')).toThrow();
      });
    });

    describe('when passed two numbers',()=> {
      it('should not throw an error',()=>{
        const calculator = new Calculator();
        expect(()=> calculator.subtract(1,2)).not.toThrow();
      });

      it('it should subtract the second number from the first number',()=>{
        const calculator= new Calculator();
        expect(calculator.subtract(1,2)).toBe(-1);
        expect(calculator.subtract(4,1)).toBe(3);
        expect(calculator.subtract(100,47)).toBe(53);
      });
    });
  });

  describe ('multiply',()=>{
    describe('when passed a string as a number',()=>{
      it('should throw an error',()=>{
        const calculator = new Calculator();
        expect(()=> calculator.multiply('2',3)).toThrow();
        expect(()=> calculator.multiply(2,'3')).toThrow();
      });
    });

    describe('when passed two numbers',()=>{
      it('it should not throw an error',()=>{
        const calculator = new Calculator();
        expect(()=> calculator.multiply(4,5)).not.toThrow();
      });

      it('it should give the correct result of the multiplication of the numbers',()=>{
        const calculator= new Calculator();
        expect(calculator.multiply(4,10)).toBe(40);
        expect(calculator.multiply(3,15)).toBe(45);
        expect(calculator.multiply(-2,3)).toBe(-6);
      });
    });
  });

  describe('divide',()=>{
    describe('when passed a string as a number',()=>{
      it('should throw an error',()=>{
        const calculator = new Calculator();
        expect(()=> calculator.divide(2,'3')).toThrow();
        expect(()=> calculator.divide('2',3)).toThrow();
      });
    });

    describe('when passed two numbers',()=>{

      it('should return error if the second number is zero',()=>{
        const calculator=new Calculator();
        expect(()=>calculator.divide(3,0)).toThrowError('Can not divide by zero.');
      });

      it('should not throw an error', () => {
        const calculator = new Calculator();
        expect(()=>calculator.divide(2,3)).not.toThrow();
      });

      it('should return the divided value', () => {
        const calculator = new Calculator();
        expect(calculator.divide(4,2)).toBe(2);
        expect(calculator.divide(360,-2)).toBe(-180);
      });
    });
  });


});
