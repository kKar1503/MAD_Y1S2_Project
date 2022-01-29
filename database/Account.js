// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import {queryUser, insertNewUser} from './Schemas';

// =============================================
// Main Logic for Authenticating User Login
// =============================================
export const Authenticate = (username, password) =>
	new Promise((resolve, reject) => {
		queryUser(username)
			.then(user => {
				if (user[0].password !== password) {
					reject();
				}
				resolve(user[0]);
			})
			.catch(() => {
				reject();
			});
	});

export const Signup = newUser =>
	new Promise((resolve, reject) => {
		insertNewUser(newUser)
			.then(user => {
				console.log(`${user.username} is created!`);
				resolve();
			})
			.catch(err => {
				console.log(err);
				reject();
			});
	});
