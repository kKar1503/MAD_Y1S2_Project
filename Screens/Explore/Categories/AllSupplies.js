/* eslint-disable react-native/no-inline-styles */

// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import necessary classes for development
// =============================================
import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import {listingRealm, queryAllListings} from '../../../database/Schemas';
import {useIsFocused} from '@react-navigation/native';
import {PressedListing} from '../../../database/Listings';
import {useDrawerStatus} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
// =============================================
// Main Page Implementation
// =============================================

const Item = ({title, source, description, navigation, id, lightMode}) => (
	<TouchableOpacity
		onPress={() => {
			PressedListing(id);
			navigation.navigate('Listing');
		}}
		style={[
			styles.listingContainer,
			{backgroundColor: lightMode ? 'grey' : 'black'},
		]}>
		<Image source={source} style={styles.listingImage} />
		<View style={styles.textContainer}>
			<Text style={[styles.name, {color: lightMode ? 'black' : 'white'}]}>
				{title}
			</Text>
			<Text
				style={[
					styles.description,
					{color: lightMode ? 'black' : 'white'},
				]}>
				{description}
			</Text>
		</View>
	</TouchableOpacity>
);

const AllSuppliesScreen = ({navigation}) => {
	const [listings, setListings] = useState([]);

	const reloadData = async () => {
		queryAllListings()
			.then(queryListings => {
				const restructuredListings = [];
				for (let listing of queryListings) {
					restructuredListings.push({
						id: listing.id,
						title: listing.title,
						source: require('../../../assets/img/cat2.png'),
						description: listing.description,
					});
				}
				setListings(restructuredListings);
			})
			.catch(err => {
				console.log(err);
				setListings([]);
			});
	};

	const STORAGE_MODE = '@current_mode';
	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();
	const [lightMode, setLightMode] = useState(false);

	useEffect(() => {
		reloadData();
		listingRealm.addListener('change', () => reloadData());
		AsyncStorage.getItem(STORAGE_MODE, (err, res) => {
			if (!err) {
				if (parseInt(res, 10) === 2) {
					console.log('light');
					setLightMode(true);
				} else {
					console.log('dark');
					setLightMode(false);
				}
			} else {
				console.log(err);
			}
		});
	}, [isFocused, drawerStatus]);

	const renderItem = ({item}) => (
		<Item
			title={item.title}
			source={item.source}
			description={item.description}
			navigation={navigation}
			id={item.id}
			lightMode={lightMode}
		/>
	);

	return (
		<View
			style={[
				styles.container,
				{backgroundColor: lightMode ? 'white' : '#303030'},
			]}>
			<FlatList
				nestedScrollEnabled={true}
				data={listings}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'flex-start',
		backgroundColor: '#303030',
		paddingHorizontal: 15,
	},
	viewWrapper: {
		marginVertical: 20,
		width: '95%',
		flexDirection: 'row',
		alignSelf: 'center',
	},
	viewWrapperVertical: {
		flexDirection: 'column',
	},

	catImages: {
		width: 200,
		height: undefined,
		aspectRatio: 0.72,
		borderRadius: 5,
		marginRight: 50,
		marginBottom: 30,
	},
	catText: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
	},
	catItemsText: {
		color: '#666666',
		fontSize: 15,
	},
	robotoReg: {
		fontFamily: 'Roboto-Regular',
	},
	robotoBold: {
		fontFamily: 'Roboto-Bold',
	},
	montBold: {
		fontFamily: 'Montserrat-ExtraBold',
	},
	listingImage: {
		width: 80,
		height: 80,
	},
	listingContainer: {
		backgroundColor: 'black',
		padding: 15,
		flexDirection: 'row',
		margin: 3,
		borderRadius: 3,
	},
	name: {
		color: 'white',
		fontSize: 20,
		marginBottom: 5,
	},
	description: {
		color: 'grey',
	},
	textContainer: {
		padding: 10,
	},
});

// =============================================
// Export
// =============================================
export default AllSuppliesScreen;
