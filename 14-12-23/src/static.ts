class ToStatic {
    private static count: number = 0;

    constructor(public name: string,public id:number) {
        this.name = name;
        this.id=id;
        ToStatic.count++;
    }

    get names(): string {
        return this.name;
    }

    static get totalNames(): number {
        return ToStatic.count;
    }
}

let names: string[] = ['raj', 'kumar', 'virat'];

let instances: ToStatic[] = [];

for (const name of names) {
    const instance: ToStatic = new ToStatic(name,1);
    instances.push(instance);
}


for (const instance of instances) {
    console.log("Name is ", instance.names);
}

console.log("Total Names are ", ToStatic.totalNames);
