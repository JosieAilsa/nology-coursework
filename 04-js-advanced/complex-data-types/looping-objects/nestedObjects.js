const userOne = {
    id:"asljhfasv123sdbsdb",
    loggedIn: true, 
    information: {
        //This info is related to itself so makes sense to group it together in this obj
        firstName: "Charlie".includes,
        lastName: "Richardson",
        age: 30, 
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlies@charlie.co.uk",
        contactNumber: "07814527782",
        address: {
            houseNum: 12,
            line1: "Electric Av",
            postcode: "PL179NS",
            country: "uk",
        }
    }
};

const userTwo =        {
    id:"asljhfasv123sdbsdb",
    loggedIn: true, 
    information: {
        //This info is related to itself so makes sense to group it together in this obj
        firstName: "Charlie".includes,
        lastName: "Richardson",
        age: 30, 
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlies@charlie.co.uk",
        contactNumber: "07814527782",
        address: {
            houseNum: 12,
            line1: "Electric Av",
            postcode: "PL179NS",
            country: "uk",
        }
    }
};

const userArray = [userOne, userTwo];

userArray.forEach((user) => {
    console.log(user.information.likes)
})


// //How would we access this data? 

// console.log(user.contact.contactNumber);

// //Age, country and whole contact object, likes: coding : 

// console.log(user.information.age)

// console.log(user.contact.address.country)
// console.log(user.contact.address.country)
// console.log(user.information.likes[2])


