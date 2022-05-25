const db = require('./models')

const oneToManyCRUD = async () => {
	try {
		// start by finding a user
		const foundUser = await db.user.findOne({
			where: {
				firstName: 'April'
			}
		}) // find the first user
		// create a pet for this user
		// const newPet = await foundUser.createPet({
		// 	name: 'Koby',
		// 	species: 'Pitbull mix'
		// })

		// console.log(newPet)

		// find all of a single user's pets 
		// const pets = await foundUser.getPets()
		// pets.forEach(pet => console.log(pet.name))

		// create a pet and add it to a user
		const options = {
			where: {
				name: 'Lola'
			},
			defaults: {
				species: 'Toy Yorkie'
			}
		} 
		const [pet, created] = await db.pet.findOrCreate(options) 
		// give the pet to the user
		// await foundUser.addPet(pet)

		// const allPets = await foundUser.getPets()
		// allPets.forEach(pet => console.log(`${foundUser.firstName} is the proud pet parent of ${pet.name} who is a ${pet.species}`))

		// https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances

		// Belongs to mixin methods availible
		// pet.getUser()
		// console.log(await pet.getUser())
		// pet.setUser()
		// pet.createUser()

		// hasMany mixin methods availible
		// user.getPets()
		// user.countPets()
		// console.log(await foundUser.countPets())
		// user.hasPet()
		// user.hasPets()
		// user.setPets()
		// user.addPet()
		// user.addPets()
		// user.removePet()
		// user.removePets()
		// user.createPet()

		// 'eager loading' or includes
		const foundJune = await db.user.findOne({
			where: { 
				firstName: 'June'
			 },
			 include: [db.pet, /* db.otherRelationship, db.etc */ ] // will give June a .pets props with all of her pets
		})
		console.log(foundJune)
		foundJune.pets.forEach(pet => console.log(`June has a ${pet.name}`))	

	} catch (err) {
		console.warn('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 error:', err)
	}
}

oneToManyCRUD()

// const model = { [`create${model.name}`]: function () {} }
// const keyName = 'taco'
// const myObject = {
//   [`hello_${keyName}`]: function() {console.log('hello')}
// }
// console.log(myObject)