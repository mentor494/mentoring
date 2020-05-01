const fs = require('fs');



class Observer {
    update(data){
        throw Error("not supported")
    }
}

class LogObserver extends Observer{
    update(data){
        console.log("I got the new details")
    }
}

class AlertObserver extends Observer{

}

class EmailObserver extends Observer{
    update(data){
        console.log("sending an email ")
    }
}



class EventManager{

    constructor() {
        this.eventToListeners = []
    }

    subscribe(eventType, observer){
        let listeners = this.eventToListeners[eventType];
        if(!listeners){
            listeners = [];
            this.eventToListeners[eventType] = listeners;
        }

        listeners.push(observer)
    }

    unsubscribe(eventType, observer){
        let listeners = this.eventToListeners[eventType];
        if(listeners){
           listeners.remove(observer)
        }
    }

    notify(eventType, data){
        let listeners = this.eventToListeners[eventType];
        if(listeners){
            listeners.forEach(observer => observer.update(data))
        }
    }

}

class Editor extends EventManager{

    constructor() {
        super();
    }

    write(details){
        fs.appendFile('observer.txt', details, function (err, file) {
        });
        super.notify("write", details);
    }

    delete(){
        fs.unlink("observer.txt", function (err) {
            super.notify("error","observer.txt");
        });

        super.notify("delete","removed");
    }
}


let editor = new Editor();


let logObserver = new LogObserver();

editor.subscribe("write",logObserver);

editor.write("roee")


let logObserver2 = new LogObserver();

editor.subscribe("write",logObserver2);

console.log("writting roee2");
editor.write("roee2");


let emailObserver = new EmailObserver();

editor.subscribe("delete", emailObserver);

editor.delete()