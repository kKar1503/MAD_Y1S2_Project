import Realm from 'realm';

// Creating Schemas

// Users' Schema
class UserSchema extends Realm.Object{};
UserSchema.schema = {
    name: 'User',
	id: 'objectId',
	login: {
		username: 'string',
		password: 'string',
	},
	personal: {
		name: 'string',
		email: 'string',
		birthday: 'date',
		phone: 'int',
	},
};

// Create realm
let realm = new Realm({schema: [Users], schemaVersion: 4});

// Return realm path
let getPath = () => {
    console.log("Realm is located at: " + realm.path);
    // Returns realm.path.toString
}

// Functions
// Return all users
let getAllUsers = () => {
    return realm.objects('User')
}

// Add a single user using parameters
let addUser = (_username, _password, _name, _email, _birthday, _phone) => {
    realm.write(() => {
        const user = realm.create('User', {
            login.username: _username,

        })
    })
}