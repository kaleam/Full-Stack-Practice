let users = [{
    name: "Rajneesh",
    age: 34,
    address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
    },
    orders: [{
        id: 1,
        name: "GOT Book Series"
    }],
},
{
    name: "Bhavesh",
    age: 37,
    address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
    },
},
{
    name: "Jasbir",
    age: 38,
    address: {
        local: "196 Lama Bhavan",
        city: "Gangtok",
        state: "Sikkim",
    },
    orders: [{
        id: 1,
        name: "Chair"
    },
    {
        id: 2,
        name: "PS5"
    },
    ],
},
];

function updateUsers(users, userObject, item) {
    //write your code here
    let userFound = false
    for (let user of users) {
        if (user.name === userObject.name) {
            userFound = true
            user.age = userObject.age
            user.address = userObject.address
            if (item) {
                if (!user.orders || user.orders.length == 0) {
                    user.orders = []
                    user.orders.push({
                        id: 1,
                        name: item
                    })
                }
                else {
                    user.orders.push({
                        id: user.orders.length + 1,
                        name: item
                    })
                }
            }
        }
    }
    if (!userFound) {
        if (item)
            userObject.orders = [{
                id: 1,
                name: item
            }]
        users.push(userObject)
    }
    return users
}

// TC 1
// let updatedUsers = updateUsers(
//     users,
//     {
//         name: "Rajneesh",
//         age: 34,
//         address: {
//             local: "22 Alaknanda",
//             city: "Dehradun",
//             state: "UK",
//         },
//     },
//     "GOT Book Series"
// )

// TC 2
// let updatedUsers = updateUsers(users, {
//     name: "Ravi",
//     age: 24,
//     address: {
//         local: "25 Iroda",
//         city: "Dehradun",
//         state: "UK",
//     },
// })

// TC 3
let updatedUsers = updateUsers(users, {
    name: "Bhavesh",
    age: 37,
    address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
    },
}, "Chair")

console.log(JSON.stringify(updatedUsers))