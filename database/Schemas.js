import Realm from 'realm';

export const USER_SCHEMA = 'User';
export const REVIEW_SCHEMA = 'Review';

// Definitions for Models and Properties
export const UserSchema = {
	name: USER_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int', // Primary Key
		username: {type: 'string', indexed: true},
		password: 'string',
		fullname: 'string',
		email: 'string',
		birthday: 'date',
		phone: 'int',
		bio: 'string?',
	},
};

export const ReviewSchema = {
	name: REVIEW_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int', // Primary Key
		stars: 'int',
		reviewee: 'string',
		recipient: USER_SCHEMA,
	},
};

const userDatabaseOptions = {
	path: 'user.realm',
	schema: [UserSchema],
};

const reviewDatabaseOptions = {
	path: 'review.realm',
	schema: [ReviewSchema],
};

// Functions
export const insertNewUser = newUser =>
	new Promise((resolve, reject) => {
		Realm.open(userDatabaseOptions)
			.then(realm => {
				const lastUser = realm
					.objects(USER_SCHEMA)
					.sorted('id', true)[0];
				const highestId = lastUser == null ? 0 : lastUser.id;
				newUser.id = highestId == null ? 1 : highestId + 1;
				realm.write(() => {
					realm.create(USER_SCHEMA, newUser);
					console.log('new user created');
					resolve(newUser);
				});
			})
			.catch(err => reject(err));
	});

export const updateUser = user =>
	new Promise((resolve, reject) => {
		Realm.open(userDatabaseOptions)
			.then(realm => {
				realm.write(() => {
					let updatingUser = realm.objectForPrimaryKey(
						USER_SCHEMA,
						user.id,
					);
					updatingUser.fullname = user.fullname;
					updatingUser.email = user.email;
					updatingUser.birthday = user.birthday;
					updatingUser.bio = user.bio;
					updatingUser.phone = user.phone;
					resolve();
				});
			})
			.catch(err => reject(err));
	});

export const updateUserPassword = user =>
	new Promise((resolve, reject) => {
		Realm.open(userDatabaseOptions)
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
		Realm.open(userDatabaseOptions)
			.then(realm => {
				let foundUser = realm
					.objects(USER_SCHEMA)
					.filtered(`username ==[c] "${username}"`);
				resolve(foundUser);
			})
			.catch(err => reject(err));
	});

export const queryUserById = id =>
	new Promise((resolve, reject) => {
		Realm.open(userDatabaseOptions)
			.then(realm => {
				let foundUser = realm.objectForPrimaryKey(USER_SCHEMA, id);
				resolve(foundUser);
			})
			.catch(err => reject(err));
	});

export const postNewReview = (id, newReview) =>
	new Promise((resolve, reject) => {
		Realm.open(reviewDatabaseOptions)
			.then(realm => {
				const lastReview = realm
					.objects(REVIEW_SCHEMA)
					.sorted('id', true)[0];
				const highestId = lastReview == null ? 0 : lastReview.id;
				const user = realm.objectForPrimaryKey(USER_SCHEMA, id);
				newReview.recipient = user;
				newReview.id = highestId == null ? 1 : highestId + 1;
				realm.write(() => {
					realm.create(REVIEW_SCHEMA, newReview);
					console.log('new review created');
					resolve(newReview);
				});
			})
			.catch(err => reject(err));
	});

// Working halfway
export const queryAllReviews = id =>
	new Promise((resolve, reject) => {
		Realm.open(userDatabaseOptions)
			.then(realm => {
				let foundUser = realm.objectForPrimaryKey(USER_SCHEMA, id);
				if (
					foundUser.reviews.length === 0 ||
					foundUser.reviews == null
				) {
					reject();
				} else {
					resolve(foundUser.reviews);
				}
			})
			.catch(err => reject(err));
	});

export default new Realm(userDatabaseOptions);
