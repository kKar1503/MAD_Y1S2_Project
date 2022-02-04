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

// =============================================
// Main Logic for Storing Category
// =============================================
const STORAGE_CATEGORY = '@current_category';
const STORAGE_SEARCH = '@current_search';
const STORAGE_LISTING = '@current_listing';

export const LoadCategory = () =>
	new Promise((resolve, reject) => {
		AsyncStorage.getItem(STORAGE_CATEGORY)
			.then(cat => {
				if (cat != null) {
					resolve(cat);
				} else {
					reject();
				}
			})
			.catch(err => reject(err));
	});

export const LoadSearch = () =>
	new Promise((resolve, reject) => {
		AsyncStorage.getItem(STORAGE_SEARCH)
			.then(search => {
				if (search != null) {
					resolve(search);
				} else {
					reject();
				}
			})
			.catch(err => reject(err));
	});

export const PressedListing = id =>
	new Promise((resolve, reject) => {
		AsyncStorage.removeItem(STORAGE_LISTING);
		AsyncStorage.setItem(STORAGE_LISTING, id.toString())
			.then(() => resolve())
			.catch(err => reject(err));
	});

export const LoadListingId = () =>
	new Promise((resolve, reject) => {
		AsyncStorage.getItem(STORAGE_LISTING)
			.then(id => {
				if (id != null) {
					resolve(id);
				} else {
					reject();
				}
			})
			.catch(err => reject(err));
	});
