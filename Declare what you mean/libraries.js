const orders = [[1.25], [5.00, 10.23], [2.00]];
const flattened = R.flatten(orders);

const noneBelow1 = R.none((n) => n < 1, flattened);
const rejected = R.reject(n => n % 2 === 0, flattened);

const tPlayers = [
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

const selected = R.pluck('rating', tPlayers)

const someArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const rejectedN = R.reject((x) => {
    return x % 2 === 0;
}, someArray)
const user1 = {
    name: 'somename',
    pass: 'randompass'
};

const withoutPass = R.omit('pass', user1);
const onlyPass = R.pick('pass', user1);
const playersWithoutRating = R.omit(['id'], tPlayers);

//Like SQL
const newPlayers = R.project(['name', 'rating'], tPlayers);