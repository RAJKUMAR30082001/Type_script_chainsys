import { herbi, carni } from "./interface";

export class Herbivore implements herbi {
    private _name!: string;
    private _habit!: string;
    private _food!: string;

    constructor(data?: herbi) {
        if (data) {
            this._name = data.name;
            this._habit = data.inhabitate;
            this._food = data.favplant;
        }
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log("Invalid input for name");
        }
    }

    get inhabitate(): string {
        return this._habit;
    }

    set inhabitate(newHabit: string) {
        this._habit = newHabit;
    }

    get favplant(): string {
        return this._food;
    }

    set favplant(newFood: string) {
        this._food = newFood;
    }
}

export class Carnivore implements carni {
    private _name: string;
    private _habit: string;
    private _prey: string;
    private _size: number;

    constructor(data: carni) {
        this._name = data.name;
        this._habit = data.inhabitate;
        this._prey = data.prey;
        this._size = data.size;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log("Invalid input for name");
        }
    }

    get inhabitate(): string {
        return this._habit;
    }

    set inhabitate(newHabit: string) {
        this._habit = newHabit;
    }

    get prey(): string {
        return this._prey;
    }

    set prey(newPrey: string) {
        this._prey = newPrey;
    }

    get size(): number {
        return this._size;
    }

    set size(newSize: number) {
        if (typeof newSize === 'number') {
            this._size = newSize;
        } else {
            console.log("Invalid input for size");
        }
    }
}

export class Zoo {
    private _herbivore?: Herbivore;
    private _carnivore?: Carnivore;

    constructor(herbivoreData?: herbi, carnivoreData?: carni) {
        if (herbivoreData) {
            this._herbivore = new Herbivore(herbivoreData);
        } else if (carnivoreData) {
            this._carnivore = new Carnivore(carnivoreData);
        }
    }

    getHerbivoreByName(): string | undefined {
        return this._carnivore?.name;
    }
}

