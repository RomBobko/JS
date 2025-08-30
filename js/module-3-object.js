// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
// };

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);

// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist[propertyName]);



// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickedData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickedData);





// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length;
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// playlist.changeName('нове імя');

// playlist.addTrack('track-4');
// playlist.addTrack('track-5');

// playlist.updateRating(3);

// console.log(playlist);

// playlist.addTrack('track-6');

// console.log(playlist.getTrackCount());





// const feedback = {
//     good: 5,
//     neutral: 30,
//     bad: 3,
// }

// const keys = Object.keys(feedback);
// const values = Object.values(feedback);

// console.log(keys);
// console.log(values);



const friends =[
    { name: 'mango', online: false},
    { name: 'orange', online: true},
    { name: 'Alex', online: true},
    { name: 'Serge', online: false},
];

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {

//         if (friend.name === friendName) {
//             return 'знайшли';
//         }
//     }

//     return 'не знайшли';
// }

// console.log(findFriendByName(friends, 'orange'));
// console.log(findFriendByName(friends, 'Johnson'));
// console.log(findFriendByName(friends, 'Alex'));


// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name);
//     };

//     return names;
// };

// console.log(getAllNames(friends));