const team = {
    players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],
    games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
    get _players() {
        return this._players;
    },
    get _games() {
        return this._games;
    },

    addPlayers(firstName, lastName, age) {
        const player = { firstName: firstName, lastName: lastName, age: age };
        this.players.push(player)
    },

    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game)
    }

}

team.addPlayers('Steph', 'Curry', 28);
team.addPlayers('Lisa', 'Leslie', 44);
team.addPlayers('Bugs', 'Bunny', 76);

team.addGame('Knicks', 112, 25)

console.log(team.games)

