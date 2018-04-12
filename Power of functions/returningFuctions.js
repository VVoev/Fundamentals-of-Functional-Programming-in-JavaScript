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


const byId = (id) => {
    return (player) => {
        return player.id === id;
    }
}

const our = users.find(byId(3));