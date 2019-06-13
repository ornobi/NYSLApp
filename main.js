var app = new Vue({
    el: "#vue-app",
    data: {
        div: 0
    },

    methods: {}
});
standings = data[0].teams;
/*
var standings
var teams = [{
        teamName: "team A",
        players: [{
                name: "Bato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 8,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "Beto",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 7,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "Bito",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 5,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "Boto",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 3,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "Buto",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 9,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            }
        ],
        coach: {
            coachName: "tintin",
            aboutCoach: "blablablablabalbalksabdalkfbaklfjasklfalkjalkfjalkfjadklfjkladfj"
        }
    },
    {
        teamName: "team B",
        players: [{
                name: "cato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "teto",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tito",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            },
            {
                name: "tato",
                photo: "sss.jpg",
                matchesPlayed: 2,
                goals: 2,
                cleanSheets: 0,
                position: "fw"
            }
        ],
        coach: {
            coachName: "tintin",
            aboutCoach: "blablablablabalbalksabdalkfbaklfjasklfalkjalkfjalkfjadklfjkladfj"
        }
    }
];

var pichichi = [];
for (var i = 0; i < teams.length; i++) {
    for (var j = 0; j < teams[i].players.length; j++) {
        pichichi.push({
            goals: teams[i].players[j].goals,
            name: teams[i].players[j].name
        });
    }
}

pichichi = sortByKey(pichichi, "goals");

pichichi.reverse();

console.log(pichichi);

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var member1 = a[key];
        var member2 = b[key];
        if (member1 < member2) {
            return -1;
        } else if (member1 > member2) {
            return 1;
        } else {
            return 0;
        }
    });
}

*/