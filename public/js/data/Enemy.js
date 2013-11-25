GAME.data.Enemy = 
{
    1: {        
        name: "Vampire",        
        id: 1,
        class_name: "vampire",
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
        class_name: "mimic",
        attack: 0.97,
        defense: 2,
        resistances: {},
        weaknesses: {},
        abilities: [1]
    },
    3: {
        name: "Nundead",
        id: 3,
        class_name: "nundead",
        attack: 0.52,
        defense: 1,
        resistances: {},
        weaknesses: {},
        abilities: []
    }
};