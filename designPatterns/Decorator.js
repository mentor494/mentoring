

class Sender{
    createMsg(name){
        return "hi "+name;
    }
}


class DecoratorSend extends Sender{

    constructor(sender) {
        super();
        this.sender = sender
    }

    createMsg(name){
        return this.sender.createMsg(name);
    }
}

class FacebookSend extends DecoratorSend{

    constructor(sendDec) {
        super(sendDec);
    }

    createMsg(name){
        let helloMsg = super.createMsg(name);
        helloMsg = helloMsg +"\n"+"my facebook page is 231231 if you wish to contact me there"
        return helloMsg
    }
}

class HTMLSend extends DecoratorSend{
    constructor(sendDec) {
        super(sendDec);
    }
    createMsg(name){
        let helloMsg = super.createMsg(name);
        helloMsg = "<html><body>\n"+helloMsg+"</body></html>";
        return helloMsg;
    }
}

class SignatureSend extends DecoratorSend{
    constructor(sendDec) {
        super(sendDec);
    }
    createMsg(name){
        let helloMsg = super.createMsg(name);
        helloMsg = helloMsg+"\n"+"Thank you, Roee Zilkha";
        return helloMsg;
    }
}


console.log("\nwith facebook\n-------------------");
let fbSend = new FacebookSend(new Sender())

console.log(fbSend.createMsg("john"))

console.log("\nwith signature\n-------------------");
let signatureSend = new SignatureSend(new Sender())

console.log(signatureSend.createMsg("john"))

console.log("\nwith everything\n-------------------");
let withEverything = new HTMLSend(new SignatureSend(new FacebookSend(new Sender())))

console.log(withEverything.createMsg("john"))