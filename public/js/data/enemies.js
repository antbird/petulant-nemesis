GAME.data.enemies = 
{
    1: {        
        name: "Vampire",
        id: 1,
        attack: 1.17,
        defense: 1.05,
        resistances: {
            "enemies": [
                "mummy",
                "werewolf"
            ],
            "items": [
                "bones"
            ]
        },
        weaknesses: {
            "enemies": [
                "priest"
            ],
            "items": [
                "stake"
            ]
        }
    },
    2: {        
        name: "Mimic",
        id: 2,
        attack: 0.97,
        defense: 2,
        resistances: {},
        weaknesses: {},
        abilities: [1]
    }
};