"use strict";
class ToStatic {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = id;
        ToStatic.count++;
    }
    get names() {
        return this.name;
    }
    static get totalNames() {
        return ToStatic.count;
    }
}
ToStatic.count = 0;
let names = ['raj', 'kumar', 'virat'];
let instances = [];
for (const name of names) {
    const instance = new ToStatic(name, 1);
    instances.push(instance);
}
for (const instance of instances) {
    console.log("Name is ", instance.names);
}
console.log("Total Names are ", ToStatic.totalNames);
