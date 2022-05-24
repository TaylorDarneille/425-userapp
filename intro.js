const db = require('./models')

async function userCRUD() {
	try {
		// CREATE
		// run async code
		// return an instance of the newly created user model
		// const newUser = await db.user.create({
		// 	firstName: 'June',
		// 	lastName: 'Holmberg',
		// 	age: 34,
		// 	email: 'june.holmberg@generalassemb.ly'
		// })
		// console.log(newUser.firstName) // dont haev to say dataValues

		// READ 
		// find everything in the db SELECT * FROM ...;
		// const allUsers = await db.user.findAll()
		// // console.log(allUsers) 
		// allUsers.forEach(user => console.log(user)) // can use array methods

		// SELECT * FROM ... WHERE ...;
		// const june = await db.user.findAll({
		// 	where: {
		// 		firstName: 'June'
		// 	}
		// })
		// an array of 1 Junes
		// console.log(june)

		// FINDER METHODS
		// find someone by their primary key
		// it will return null or the found instance
		// const taco = await db.user.findByPk(100)
		// console.log(taco)

		// find one works with a where clause
		// returns the first instance that matches the where clause
		// const foundOne = await db.user.findOne({
		// 	where: {
		// 		// firstName: 'June'
		// 		id: 3 // find by pk with too
		// 	}
		// })
		// console.log(foundOne)

		// find or create -- either find something and if it is not found -- create it
		// return [{ user }, true/false boolean (if they where created)]
		const [user, created] = await db.user.findOrCreate({
			// what to search for
			where: {
				firstName: 'April'
			},
			// what to add if not found
			defaults: {
				// everything that is not in the where clause
				lastName: 'Gonzales',
				age: 28,
				email: 'april.gonzales@generalassemb.ly'
			}
		})
		console.log(`${user.firstName} was created? ${created}`)

		// UPDATE 

		// DESTROY
	} catch (err) {
		// we wind up if there is an error
		console.log(err)
	}
}

userCRUD() // don't forget to invoke