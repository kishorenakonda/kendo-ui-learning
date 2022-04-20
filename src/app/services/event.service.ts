import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject, from } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventService {

    public eventSubject !: Subject<any>;
    public listeners: any = {};
    public events !: Observable<any>;

    constructor() {
        this.getInvokeFromConstructor();
    }

    /**
     * @method To Invoke from constructor and initialize the events
     *         We have a Subscribe() event which listens to subject and holds the data.
     */
    public getInvokeFromConstructor() {
        this.eventSubject = new Subject();
        this.events = from(this.eventSubject);

        this.events.subscribe(({ name, args }: any) => {
            if (this.listeners[name]) {
                for (const listener of this.listeners[name]) {
                    if (listener) {
                        listener(...args);
                    }
                }
            }
        });
    }

    /**
     * @method To Broadcast an event to perform some operation from one component to another component
     * @param name : String - Unique Key created for handling the operation
     * @param args : any - It can have any values with which it will perform operations
     */
    public broadcast(name: string, ...args: any[]) {
        this.eventSubject.next({ name, args });
    }

    /**
     * @method To Invoke the method / event based on broadcasting (BehaviourSubject) from one component to another.
     * @param eventKey : Event Key with which we are establishing a subject and observable behavior
     * @param valueOrMethodName : It can have either value that to be passed 
     *                            (or) the method name that has to be invoked with the passed argument
     */
    public receive(eventKey: string, valueOrMethodName: Function) {
        if (!this.listeners[eventKey]) {
            this.listeners[eventKey] = [];
        }

        this.listeners[eventKey].push(valueOrMethodName);
    }
}