console.dir(_);



// _.isEmpty(value) перевіряє чи пустий
console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 5 }));



// _.get(object, path) - щоб подивитися глибоко в обєкті
const user = {
    name: 'gdvsd',
    location: {
        coutry: 'ukraine',
        city: 'lviv',
    }
};

console.log(_.get(user, 'location.city'));

console.log(user?.location?.city);



// _.union([array1], [array2]) - обєднує 2 масиви в 1 з унікальними значеннями 
console.log(_.union([1, 2, 3], [3, 4, 5]));



// _.range([start=0], end, [step=1]) робить масив 
console.log(_.range(1, 12, 2));



// _.sortBy(collection, ) -по замовчуванню сорутує по зростанню
const users= [
    { 'user': 'fred', 'age': 48},
    { 'user': 'barni', 'age': 36},
    { 'user': 'fred', 'age': 40},
    { 'user': 'barni', 'age': 34}
];

console.table(_.sortBy(users, user => ['user', 'age']));



// _.sum() - повертає тотал із масиву
// _.sumBy() - для масиву обєктів
console.log(_.sum([1, 2, 5, 6, 56]));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
    { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
    { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
    { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},
];

console.log(_.sumBy(players, player => player.timePlayed));



//  _.uniq() - вибирає унікальний 
//  _.uniqBy() - масив обєктів
//  _.sorted()  /  _.sortedBy() - мортує


// _.random()


// _.min() / _.max() - шукає в масиві
// _.minBy() / _.maxBy() - масив обєктів

console.log(_.minBy(players, player => player.points));



//  _.camelCase() - ми проходили
//  _.capitalise() - робить a-b-c-d
//  _.kebabCase - 
//  _.lowerCase() 
//  _.upperCase