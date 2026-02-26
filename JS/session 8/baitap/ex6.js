const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37"
];

const filterByPosition = (position, players) => {
    let newListPlayerByPosition = players.filter((player) => {
        return player.toLowerCase().includes(position.toLowerCase());
    });
    console.log(newListPlayerByPosition);
    return newListPlayerByPosition;
};

filterByPosition("Forward", players);
const reportByPosition = (players) => {
    let listPlayerForward = filterByPosition("Forward", players);
    console.log(` Số cầu thủ: ${listPlayerForward.length}`);
    let newList = listPlayerForward.map((player) => {
        return player.split(" - ");
    });
    let totalGoals = newList.reduce((acc, curr) => {
        return + acc += +curr[2];
    },0);
    console.log(newList);
    console.log(` Tổng số bàn thắng: ${totalGoals}`);
    
};


reportByPosition(players);