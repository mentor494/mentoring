var Stack = require('stackjs');



class Brackets_validator{
    constructor(expr) {
        this.closeToOpenMapping =  {
            '}':'{',
            ')':'(',
            ']':'['
        };
    }

    validate(expr){
        let stack = new Stack()
        for(var i=0; i<expr.length; i++){
            var character = expr.charAt(i);

            if(['{','[','('].includes(character)){
                stack.push(character);
            }else{
                if(['}',']',')'].includes(character)){
                    if(stack.isEmpty()){
                        return false;
                    }
                    var previousOpen = stack.pop();
                    if(this.closeToOpenMapping[character] !== previousOpen){
                        return false;
                    }
                }
            }
        }

        return stack.isEmpty();

    }
}

var valid = "(1+2+[1+2+3+{1+10}+5]+4)";

var invalid1 = "1+2+3+(1+2+3+5]+8)";

var invalid2 = "1+2+3+[3+{1+5}+(1+2)";


var validator = new Brackets_validator();

console.log(validator.validate(valid));

console.log(validator.validate(invalid1));
console.log(validator.validate(invalid2));
