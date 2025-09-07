// методи масивів 

// - .forEach
// - .map
// - .filter
// - .find
// - .every & some
// - .reduce
// - .sort



// UTILITYBELT FOR ARRAYMETHODS - LODASH



// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((number) => {
// console.log('number:', number);
// });

// console.log(numbers);







// METHOD - MAP

// створює новий масив і записується в нього 
// const numbers = [5, 10, 15, 20, 25];

// const doubleNumbers = numbers.map(number => number * 5);

// console.log(doubleNumbers);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},

// ];
// console.table(players);

// const playerIdToUpdate = 'player-1';

// const updatedPlayer = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         return 'ТУТ буде оновлений обєкт';
//     }

//     return 'це буде старий обєкт';
// });


// const updatedPlayer = players.map(player => 
//     playerIdToUpdate === player.id 
//     ? {...player, timePlayed: player.timePlayed + 1000 }
//     : player,
// );
// console.table(updatedPlayer);






// METHOD - FILTER

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);

// console.log(filteredNumbers);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},

// ];

// console.table(players);


// const onlinePlayers = players.filter(({ online }) => online);

// console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);

// console.table(offlinePlayers);

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 500);

// console.table(hardcorePlayers);






// METHOD - FIND

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number > 10);
// console.log(number);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},
// ];

// const playerToFind = 'player-4';

// const playerWithId = players.find(player => player.id === playerToFind);
// console.log(playerWithId);


// const findPlayerById = (allPlayers, playerId) => 
//     allPlayers.find(({id}) => id ===playerId);

// console.log(findPlayerById(players, 'player-3'));
// console.log(findPlayerById(players, 'player-5'));







// METHOD - EVERY - SOME

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},
// ];

// const isAllOnline = players.every(players => players.timePlayed > 1000);
// console.log(isAllOnline);

// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);








// METHOD - REDUCE

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log('total', total);



// const salary = {
//     mango: 160,
//     poly: 128,
//     ajax: 241,
// };

// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value,
//     0,
// );
// console.log(totalSalary);



// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//     return totalTime += player.timePlayed;
// }, 0);
// console.log(totalTimePlayed)



// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node-js']},
//     { id: '001', likes: 51, tags: ['html', 'css']},
//     { id: '002', likes: 15, tags: ['js','html', 'node-js']},
//     { id: '003', likes: 4, tags: ['css', 'react']},
//     { id: '004', likes: 34, tags: ['js', 'node-js', 'react']},
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//     if (acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }

//     acc[tag] = 1;

//     return acc;
// }, {})

// const tagsStats = allTags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1
//     }),
//     {},
// );

// console.log(tagsStats);






// METHOD - SORT -ЗМІНЮЄ оригіналльний масив

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers)

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);


// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log('copy', descSortedNumbers);
// console.log('copy2', ascSortedNumbers);



// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player-2', name: 'Poly', timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', timePlayed: 1345, points: 24, online: false},
// ];

// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed);
// console.table(sortedByBestPlayers);

// const byName = [...players].sort((a, b) => a.name[0] > b.name[0] ? 1 : -1);
// console.table(byName);









// METHOD FLAT - FLATMAP

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(2));

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node-js']},
//     { id: '001', likes: 51, tags: ['html', 'css']},
//     { id: '002', likes: 15, tags: ['js','html', 'node-js']},
//     { id: '003', likes: 4, tags: ['css', 'react']},
//     { id: '004', likes: 34, tags: ['js', 'node-js', 'react']},
// ];


// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// const tags = tweets.map(t => t.tags).flat();
// const tags = tweets.flatMap(t => t.tags);
// console.log(allTags);
// console.log(tags);