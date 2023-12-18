"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = exports.Carnivore = exports.Herbivore = void 0;
class Herbivore {
    constructor(data) {
        if (data) {
            this._name = data.name;
            this._habit = data.inhabitate;
            this._food = data.favplant;
        }
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        }
        else {
            console.log("Invalid input for name");
        }
    }
    get inhabitate() {
        return this._habit;
    }
    set inhabitate(newHabit) {
        this._habit = newHabit;
    }
    get favplant() {
        return this._food;
    }
    set favplant(newFood) {
        this._food = newFood;
    }
}
exports.Herbivore = Herbivore;
class Carnivore {
    constructor(data) {
        this._name = data.name;
        this._habit = data.inhabitate;
        this._prey = data.prey;
        this._size = data.size;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        }
        else {
            console.log("Invalid input for name");
        }
    }
    get inhabitate() {
        return this._habit;
    }
    set inhabitate(newHabit) {
        this._habit = newHabit;
    }
    get prey() {
        return this._prey;
    }
    set prey(newPrey) {
        this._prey = newPrey;
    }
    get size() {
        return this._size;
    }
    set size(newSize) {
        if (typeof newSize === 'number') {
            this._size = newSize;
        }
        else {
            console.log("Invalid input for size");
        }
    }
}
exports.Carnivore = Carnivore;
class Zoo {
    constructor(herbivoreData, carnivoreData) {
        if (herbivoreData) {
            this._herbivore = new Herbivore(herbivoreData);
        }
        else if (carnivoreData) {
            this._carnivore = new Carnivore(carnivoreData);
        }
    }
    getHerbivoreByName() {
        var _a;
        return (_a = this._carnivore) === null || _a === void 0 ? void 0 : _a.name;
    }
}
exports.Zoo = Zoo;
