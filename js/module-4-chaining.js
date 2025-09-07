
// const numbers = [1, 5, 2, 4, 3];

// const greaterThanTwo = numbers.filter(num => num > 2);
// console.log(greaterThanTwo);

// const multiplyThree = greaterThanTwo.map(num => num * 3);
// console.log(multiplyThree);

// const sorted = multiplyThree.sort((a, b) => a - b);
// console.log(sorted);



// const sorted2 = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(sorted2);


// const players = [
//     { id: 'player-1', name: 'Mango', rank: 700, timePlayed: 310, points: 54, online: true},
//     { id: 'player-2', name: 'Poly', rank: 500, timePlayed: 347, points: 85, online: true},
//     { id: 'player-3', name: 'Kiwi', rank: 300, timePlayed: 325, points: 456, online: true},
//     { id: 'player-4', name: 'Ajax', rank: 50, timePlayed: 9875, points: 876, online: false},
//     { id: 'player-5', name: 'Chelsy', rank: 600, timePlayed: 1345, points: 24, online: false},
// ];

// const onlineAndSorted = players
//     .filter(player => player.online)
//     .sort((prevRank, nextRank) => nextRank.rank - prevRank.rank);

// console.table(onlineAndSorted);








// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;

//         return this;
//     },
// };

// element.toggleHovered().changeClass('open');
// console.log(element);