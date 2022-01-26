import Realm from 'realm';

export const USER_SCHEMA = 'User';

// Definitions for Models and Properties
export const UserSchema = {
	name: USER_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'objectId', // Primary Key
		username: {typed: 'string', indexed: true},
		password: 'string',
		fullname: 'string',
		email: 'string',
		birthday: 'date',
		phone: 'int',
	},
};

const databaseOptions = {
	path: 'user.realm',
	schema: [UserSchema],
};

// Functions
export const insertNewUser = newUser =>
	new Promise((resolve, reject) => {
		Realm.open(databaseOptions)
			.then(realm => {
				realm.write(() => {
					realm.create(USER_SCHEMA, newUser);
					console.log('done');
					resolve(newUser);
				});
			})
			.catch(err => reject(err));
	});

export const updateUser = user =>
	new Promise((resolve, reject) => {
		Realm.open(databaseOptions)
			.then(realm => {
				realm.write(() => {
					let updatingUser = realm.objectForPrimaryKey(
						USER_SCHEMA,
						user.id,
					);
					updatingUser.fullname = user.fullname;
					updatingUser.email = user.email;
					updatingUser.birthday = user.birthday;
					updatingUser.phone = user.phone;
					resolve();
				});
			})
			.catch(err => reject(err));
	});

export const updateUserPassword = user =>
	new Promise((resolve, reject) => {
		Realm.open(databaseOptions)
			.then(realm => {
				realm.write(() => {
					let updatingUser = realm.objectForPrimaryKey(
						USER_SCHEMA,
						user.id,
					);
					updatingUser.password = user.password;
					resolve();
				});
			})
			.catch(err => reject(err));
	});

export const queryUser = username =>
	new Promise((resolve, reject) => {
		Realm.open(databaseOptions)
			.then(realm => {
				let foundUser = realm
					.objects(USER_SCHEMA)
					.filtered(`username ==[c] "${username}"`);
				resolve(foundUser);
			})
			.catch(err => reject(err));
	});

export const queryAllUsers = () =>
	new Promise((resolve, reject) => {
		Realm.open(databaseOptions)
			.then(realm => {
				let allUsers = realm.objects(USER_SCHEMA);
				resolve(allUsers);
			})
			.catch(err => reject(err));
	});

export default new Realm(databaseOptions);
