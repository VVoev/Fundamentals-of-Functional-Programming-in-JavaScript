const users = [
    {
        id: 1,
        name: "Ma Long",
        rating: 2700,
        sponsoredBy: 'DHS'
    },
    {
        id: 2,
        name: "Zhang Jike",
        rating: 2650,
        sponsoredBy: 'Butterfly'
    },
    {
        id: 3,
        name: "Timo Boll",
        rating: 2640,
        sponsoredBy: 'Butterfly'
    },
    {
        id: 4,
        name: "Kristian Karlson",
        rating: 2650,
        sponsoredBy: 'Stiga'
    },
    {
        id: 5,
        name: "Marcos Freitas",
        rating: 2500,
        sponsoredBy: 'Donic'
    },
    {
        id: 6,
        name: "Tiago Apolonia",
        rating: 2480,
        sponsoredBy: 'Donic'
    },
]

let id = 1;//coming from user input
let user = users.find(u => { return u.id === id });

const highLevel = 2400;
let isAllPlayersHighLevel = users.every(u => { return u.rating > highLevel });

let veryHighLevel = 2650;
let isPlayerExist = users.some(u => { return u.rating > veryHighLevel });

let neededSponsor = 'Donic';
let sponsoredBy = users.filter(u => { return u.sponsoredBy === neededSponsor });//return many
let sponsoredPlayer = users.find(u => { return u.sponsoredBy === neededSponsor });//return one

let ratingIncrease = 50;
users.map((u) => {
    u.rating += ratingIncrease;
    return u;
})//return all users + 50 rating


const numbers = [1, 2, 3, 4, 43, 4];
const sum = numbers.reduce((currSum, curr) => currSum + curr, 0);
let totalRating = users.reduce((users, user) => {
    return users + user.rating
}, 0)
let getAllSponsors = users.reduce((users, user) => {
    return users + ' ' + user.sponsoredBy
}, 'Start From here :')

let numbersArray = [10, 20, 30];
let total = numbersArray.reduce((accumulator, n) => { return accumulator + n; }, 0);



