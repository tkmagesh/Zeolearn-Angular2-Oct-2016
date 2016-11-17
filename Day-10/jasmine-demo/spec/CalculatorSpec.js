describe("Calculator", function(){

    describe("Add", function(){
        
        var calculator = null;

        beforeEach(function(){
            calculator = new Calculator();
        });

        it("should return the positive number when adding two positive numbers", function(){
            //Arrange
            
            var number1 = 10,
                number2 = 20,
                expectedResult = 25;

            //Act
            var result = calculator.add(number1, number2);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it("should return a negative number when adding two negative numbers", function(){
            //Arrange
           
            var number1 = -10,
                number2 = -20,
                expectedResult = -30;

            //Act
            var result = calculator.add(number1, number2);

            //Assert
            expect(result).toBe(expectedResult);
        })
    })
})



    



