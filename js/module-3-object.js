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



// const friends =[
//     { name: 'mango', online: false},
//     { name: 'orange', online: true},
//     { name: 'Alex', online: true},
//     { name: 'Serge', online: false},
// ];

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




// const friends =[
//     { name: 'mango', online: false},
//     { name: 'orange', online: true},
//     { name: 'Alex', online: true},
//     { name: 'Serge', online: false},
// ];

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));


// const temps = [143, 45, 49, 75, 345, 75, 342];

// console.log(Math.max(1, 345, 76, 78, 4, 576));
// console.log(Math.min(...temps));

// spread - обєктів ...масив, ...обєкт


// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// const c = {
//     ...a,
//     ...b,
// }

// console.log(c);




// const defaultSettings = {
//     theme: 'light',
//     showNotification: true,
//     hideSidebar: false,
// }

// const userSettings = {
//     showNotification: false,
//     hideSidebar: true,
// }

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// }

// console.log(finalSettings);




// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };
// деструктуризація
// const { rating, tracks, trackCount: numberOfTracks = 0, author = 'не знайдено' } = playlist;

// console.log(rating);
// console.log(numberOfTracks);
// console.log(tracks);
// console.log(author); - значення по замовчуванню якщо не знайдено;


// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     stats: {
//         followers: 234,
//         likes: 276,
//         views: 897,
//     }
// };

// const { name, rating, stats: { likes, views } } = playlist;
// // const { likes, views } = stats;

// console.log(name);
// console.log(likes);



// const authors = {
//     kiwi: 1,
//     poly: 7,
//     ajax: 9,
//     sergo: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries)

// for (const [name, rating] of entries) {
    // const [name, rating] = entry;

//     console.log(name, rating);
// }

// console.log(Math.max(...rating));







// const portfolio = {
//     name: 'Andrei',
//     rating: 5,
//     location: 'Kiev, Ukraine',
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     stats: {
//         followers: 234,
//         likes: 276,
//         views: 897,
//     }
// };


// const { name, rating, location, ...restProps } = portfolio;

// console.log(name, rating);
// console.log(restProps);



// const showProfileInfo = function ({
//         name,
//         rating,
//         location,
//         tracks,
//         stats: { likes, views },
// }) {
//         console.log(name, location, tracks, likes, views);
// };

// const profile = {
//     name: 'Andrei',
//     rating: 5,
//     location: 'Kiev, Ukraine',
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     stats: {
//         followers: 234,
//         likes: 276,
//         views: 897,
//     }
// };

// showProfileInfo(profile);








// Object.keys()
// Object.values()
// Object.entries()









// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = this.items[i];

//             if (productName === name) {
//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity() {},
//     decreaseQuantity() {},
// };

// console.log(cart.getItems());

// cart.add({name: 'apple', price: 50});
// cart.add({name: 'orange', price: 60});
// cart.add({name: 'banan', price: 60});
// cart.add({name: 'mango', price: 120});
// cart.add({name: 'apple', price: 50});
// cart.add({name: 'apple', price: 50});


// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


// cart.remove('mango');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());




