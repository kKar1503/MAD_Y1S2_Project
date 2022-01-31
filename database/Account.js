// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import AsyncStorage from '@react-native-community/async-storage';
import {queryUser, insertNewUser, queryUserById} from './Schemas';

// =============================================
// Main Logic for Authenticating User Login
// =============================================
const STORAGE_USERID = '@current_login_id';

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

export const LoadUserData = () =>
	new Promise((resolve, reject) => {
		AsyncStorage.getItem(STORAGE_USERID)
			.then(id => {
				if (id != null) {
					resolve(queryUserById(parseInt(id, 10)));
				}
			})
			.catch(err => reject(err));
	});
