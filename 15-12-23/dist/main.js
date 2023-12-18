"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const herbivoreData = {
    panda: {
        name: 'Panda',
        inhabitate: 'Bamboo Forest',
        favplant: 'Bamboo'
    },
    giraffe: {
        name: 'Giraffe',
        inhabitate: 'Savanna',
        favplant: 'Acacia'
    },
    elephant: {
        name: 'Elephant',
        inhabitate: 'Jungle',
        favplant: 'Grass'
    }
};
const herbivoreInstances = Object.values(herbivoreData).map(data => new animal_1.Herbivore(data));
console.log(herbivoreInstances);
// const herbivoreObj = new Herbivore();
const herbivoreNameToChange = 'Elephant';
for (const instance of herbivoreInstances) {
    if (instance.name === herbivoreNameToChange) {
        instance.inhabitate = 'Forest';
    }
}
const carnivoreObj = {
    name: 'Leopard',
    inhabitate: 'Forest',
    prey: 'deer',
    size: 30
};
const lion = new animal_1.Zoo(undefined, carnivoreObj);
console.log(lion.getHerbivoreByName());
