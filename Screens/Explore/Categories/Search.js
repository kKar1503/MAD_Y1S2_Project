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
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
} from 'react-native';
import {listingRealm, queryListingBySearch} from '../../../database/Schemas';
import {useIsFocused} from '@react-navigation/native';
import {LoadSearch} from '../../../database/Listings';

// =============================================
// Main Page Implementation
// =============================================
const Item = ({title, source, description, navigation}) => (
	<TouchableOpacity
		style={styles.listingContainer}
		onPress={() => navigation.navigate('Listing')}>
		<Image source={source} style={styles.listingImage} />
		<View style={styles.textContainer}>
			<Text style={styles.name}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	</TouchableOpacity>
);

const SearchScreen = ({navigation}) => {
	const [listings, setListings] = useState([]);

	const reloadData = async () => {
		const search = await LoadSearch();
		queryListingBySearch(search)
			.then(queryListings => {
				const restructuredListings = [];
				for (let listing of queryListings) {
					restructuredListings.push({
						id: listing.id,
						title: listing.title,
						source: require('../../../assets/img/Chat2.png'),
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

	const isFocused = useIsFocused();

	useEffect(() => {
		reloadData();
		listingRealm.addListener('change', () => reloadData());
	}, [isFocused]);

	const renderItem = ({item}) => (
		<Item
			title={item.title}
			source={item.source}
			description={item.description}
			navigation={navigation}
		/>
	);

	return (
		<View style={styles.container}>
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
	searchInputField: {
		alignItems: 'center',
	},
	textInput: {
		borderBottomColor: '#666666',
		borderBottomWidth: 3,
		width: 250,
		maxHeight: 60,
		color: 'white',
		fontSize: 20,
		paddingBottom: 20,
		textAlignVertical: 'bottom',
	},
	headerText: {
		color: 'white',
		fontSize: 25,
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
export default SearchScreen;
