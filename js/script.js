const students = {
    name : 'Angelo',
    lastname : 'Tripodi',
    age : 28
}

const studentsList = [ 
    {
        name : "Luigi",
        lastname : "Luigioso",
        age : 30
    },
    {
        name : "Mario",
        lastname : "Marioso",
        age : 35
    },
    {
        name : "Virginia",
        lastname : "Virginiosa",
        age : 20
    },
    {
        name : "Romolo",
        lastname : "Romoloso",
        age : 1500
    },
    {
        name : "Cesare",
        lastname : "Cesaroso",
        age : 18
    },

]

for (let i = 0; i < studentsList.length; i++ ){
    for (let key in students) {
        console.log(key)
        console.log(studentsList[i][key])
        console.log(studentsList[i])
    
    }
}

