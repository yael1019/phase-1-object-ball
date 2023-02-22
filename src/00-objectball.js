const gameObject = () => {
    const obj = {
        home: {
            teamNames: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamNames: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return obj;
}

// console.log(gameObject());

const numPointsScored = name => {
    let obj = gameObject();
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (value === 'players') {
                let secondObj = firstObj[value];
                for (let player in secondObj) {
                    debugger
                    if (player === name) {
                        let finalValue = secondObj[player];
                        for (let finalKey in finalValue) {
                            debugger
                            if (finalKey === 'points') {
                                return finalValue[finalKey];
                            }
                        }
                    }
                }
            }
        }
    }
}

// console.log(numPointsScored('Reggie Evans'));

const shoeSize = name => {
    let obj = gameObject();
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (value === 'players') {
                let secondObj = firstObj[value];
                for (let player in secondObj) {
                    debugger
                    if (player === name) {
                        let finalValue = secondObj[player];
                        for (let finalKey in finalValue) {
                            debugger
                            if (finalKey === 'shoe') {
                                return finalValue[finalKey];
                            }
                        }
                    }
                }
            }
        }
    }
}

// console.log(shoeSize('Reggie Evans'));

const teamColors = teamName => {
    let obj = gameObject();
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (value === 'teamNames') {
                for (let secondValue in firstObj) {
                    debugger
                    if (secondValue === 'colors') {
                        return firstObj[secondValue];
                    }
                }
            }
        }
    }
}

// console.log(teamColors('Brooklyn Nets'));

const playerNumbers = teamName => {
    let obj = gameObject();
    let result = [];
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (firstObj[value] === teamName) {
                for (let value2 in firstObj) {
                    if (value2 === 'players') {
                        let secondObj = firstObj[value2];
                        for (let player in secondObj) {
                            debugger
                            let finalValue = secondObj[player];
                            for (let finalKey in finalValue) {
                                debugger
                                if (finalKey === 'number') {
                                    debugger
                                    result.push(finalValue[finalKey]);
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}

// console.log(playerNumbers('Brooklyn Nets'));

const playerStats = name => {
    let obj = gameObject();
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (value === 'players') {
                let secondObj = firstObj[value];
                for (let player in secondObj) {
                    debugger
                    if (player === name) {
                        return secondObj[player];
                    }
                }
            }
        }
    }
}

// console.log(playerStats('Reggie Evans'));

const bigShoeRebounds = () => {
    let obj = gameObject();
    let biggest = 0;
    let rebound;
    for (let key in obj) {
        debugger
        let firstObj = obj[key];
        for (let value in firstObj) {
            debugger
            if (value === 'players') {
                let secondObj = firstObj[value];
                for (let player in secondObj) {
                    debugger
                    let finalValue = secondObj[player];
                    for (let finalKey in finalValue) {
                        debugger
                        if (finalKey === 'shoe') {
                            if (biggest < finalValue[finalKey]) {
                                biggest = finalValue[finalKey];
                                debugger
                            } else if (biggest > finalValue[finalKey]) {
                                for (let finalKey in finalValue) {
                                    if (finalKey === 'rebounds') {
                                        rebound = finalValue[finalKey];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return rebound;
}

// console.log(bigShoeRebounds());