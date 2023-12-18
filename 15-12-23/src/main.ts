import { Carnivore, Herbivore, Zoo } from "./animal";
import { herbi, carni } from "./interface";

const herbivoreData: {[key: string]: herbi} = {
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

const herbivoreInstances: Herbivore[] = Object.values(herbivoreData).map(data => new Herbivore(data));
console.log(herbivoreInstances);

// const herbivoreObj = new Herbivore();
const herbivoreNameToChange = 'Elephant';

for (const instance of herbivoreInstances) {
    if (instance.name === herbivoreNameToChange) {
        instance.inhabitate = 'Forest';
    }
}

const carnivoreObj: carni = {
    name: 'Leopard',
    inhabitate: 'Forest',
    prey: 'deer',
    size: 30
};

const lion = new Zoo(undefined, carnivoreObj);
console.log(lion.getHerbivoreByName());

