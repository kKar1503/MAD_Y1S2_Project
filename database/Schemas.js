import Realm from 'realm';

export const USER_SCHEMA = 'User';
export const REVIEW_SCHEMA = 'Review';
export const LISTING_SCHEMA = 'Listing';

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
		recipient: 'string',
	},
};

export const ListingSchema = {
	name: LISTING_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int', // Primary Key
		title: {type: 'string', indexed: true},
		owner: 'string',
		collection: 'string',
		category: 'string',
		condition: 'string',
		description: 'string',
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

const listingDatabaseOptions = {
	path: 'listing.realm',
	schema: [ListingSchema],
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

export const postNewReview = (recipient, newReview) =>
	new Promise((resolve, reject) => {
		Realm.open(reviewDatabaseOptions)
			.then(realm => {
				const lastReview = realm
					.objects(REVIEW_SCHEMA)
					.sorted('id', true)[0];
				const highestId = lastReview == null ? 0 : lastReview.id;
				newReview.recipient = recipient;
				newReview.id = highestId == null ? 1 : highestId + 1;
				realm.write(() => {
					realm.create(REVIEW_SCHEMA, newReview);
					console.log('new review created');
					resolve(newReview);
				});
			})
			.catch(err => reject(err));
	});

export const queryAllReviewsOfUser = recipient =>
	new Promise((resolve, reject) => {
		Realm.open(reviewDatabaseOptions)
			.then(realm => {
				let foundReviews = realm.objects(REVIEW_SCHEMA);
				if (foundReviews.length === 0 || foundReviews == null) {
					reject();
				} else {
					const filteredReviews = foundReviews.filter(
						review => review.recipient === recipient,
					);
					resolve(filteredReviews);
				}
			})
			.catch(err => reject(err));
	});

export const postNewListing = (user, newListing) =>
	new Promise((resolve, reject) => {
		Realm.open(listingDatabaseOptions)
			.then(realm => {
				const lastListing = realm
					.objects(LISTING_SCHEMA)
					.sorted('id', true)[0];
				const highestId = lastListing == null ? 0 : lastListing.id;
				newListing.owner = user;
				newListing.id = highestId == null ? 1 : highestId + 1;
				realm.write(() => {
					realm.create(LISTING_SCHEMA, newListing);
					console.log('new listing created');
					resolve(newListing);
				});
			})
			.catch(err => reject(err));
	});

export const queryAllListings = () =>
	new Promise((resolve, reject) => {
		Realm.open(listingDatabaseOptions)
			.then(realm => {
				let foundListings = realm.objects(LISTING_SCHEMA);
				if (foundListings.length === 0 || foundListings == null) {
					reject();
				} else {
					resolve(foundListings);
				}
			})
			.catch(err => reject(err));
	});

export const queryListingByCategory = category =>
	new Promise((resolve, reject) => {
		Realm.open(listingDatabaseOptions)
			.then(realm => {
				let foundListings = realm.objects(LISTING_SCHEMA);
				if (foundListings.length === 0 || foundListings == null) {
					reject();
				} else {
					let filteredListings = foundListings.filter(
						listing => listing.category === category,
					);
					resolve(filteredListings);
				}
			})
			.catch(err => reject(err));
	});

export const queryListingBySearch = search =>
	new Promise((resolve, reject) => {
		Realm.open(listingDatabaseOptions)
			.then(realm => {
				let foundListings = realm.objects(LISTING_SCHEMA);
				if (foundListings.length === 0 || foundListings == null) {
					reject();
				} else {
					let filteredListings = foundListings.filter(
						listing => listing.title === search,
					);
					resolve(filteredListings);
				}
			})
			.catch(err => reject(err));
	});

export const userRealm = new Realm(userDatabaseOptions);
export const reviewRealm = new Realm(reviewDatabaseOptions);
export const listingRealm = new Realm(listingDatabaseOptions);
