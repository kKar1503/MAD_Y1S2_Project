/* eslint-disable react-native/no-inline-styles */

// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import CustomButton from '../CustomComponent/CustomButton';
import {queryListingById} from '../../database/Schemas';
import {LoadListingId} from '../../database/Listings';
import {useIsFocused} from '@react-navigation/native';
// =============================================
// Main Page Implementation
// =============================================
const Product = ({navigation}) => {
	const [title, setTitle] = useState('');
	const [owner, setOwner] = useState('');
	const [collection, setCollection] = useState('');
	const [category, setCategory] = useState('');
	const [condition, setCondition] = useState('');
	const [description, setDescription] = useState('');
}

const isFocused = useIsFocused();

const fetchData = async() => {
    const listingId = await LoadListingId();
    const listing = queryListingById(listingId);
    return new Promise((resolve,reject) => resolve(listing))
}

useEffect(() => {
    fetchData().then(listing => {
        setTitle(listing.title)
        setOwner(listing.owner)
        setCollection(listing.collection)
        setCategory(listing.category)
        setCondition(listing.condition)
        setDescription(listing.description)
    })
}, [isFocused])

	return (
		<View style={styles.container}>
			<ScrollView style={{paddingTop: 40}}>
				<Image
					source={require('../../assets/img/Product1.png')}
					style={styles.productpic}
				/>

				<Text style={styles.title}>Set of Six Brushes</Text>

				<Text style={styles.user}>@jonathanooi</Text>

				<Text style={styles.collection}>Self-Collect or Mailing</Text>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text style={styles.category}>Category:</Text>
					<Text style={styles.cname}>Art Supplies</Text>
				</View>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text style={styles.condition}>Condition:</Text>
					<Text style={styles.condition}>Brand New</Text>
				</View>

				<View style={{paddingLeft: 20, paddingTop: 10}}>
					<Text style={styles.content}>
						Very popular Winsor & Newton brushes.{' '}
					</Text>
					<Text style={styles.content}>
						Brushes come in a set of 6.{' '}
					</Text>
					<Text style={styles.content}>
						All are of different sizes and brush tips.
					</Text>
					<Text style={styles.content}>
						Have been used for O-Level Art and is no longer in use,
						therefore to pass down to a junior who can make better
						use of them!
					</Text>
				</View>

				<View style={{flexDirection: 'row'}}>
					<CustomButton
						text="Reserve"
						onPress={() => {}}
						ButtonHeight={45}
						ButtonWidth={'45%'}
						TextFont={25}
					/>
					<CustomButton
						text="Contact"
						onPress={() => {
							navigation.navigate('ChattingProduct');
						}}
						ButtonHeight={45}
						ButtonWidth={'33%'}
						Color="white"
						TextFont={25}
						TextColor="black"
					/>
				</View>
			</ScrollView>
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
		alignItems: 'center',
		backgroundColor: '#303030',
	},
	content: {
		fontSize: 15,
		color: '#999999',
		lineHeight: 25,
	},
	productpic: {
		alignSelf: 'center',
		width: 350,
		height: 200,
		paddingTop: 100,
		borderRadius: 3,
		shadowOpacity: 10,
	},

	title: {paddingLeft: 20, paddingTop: 10, fontSize: 25, color: 'white'},

	user: {paddingLeft: 20, paddingTop: 10, color: '#FF8A65'},

	collection: {paddingTop: 10, paddingLeft: 20, color: 'white', fontSize: 20},

	category: {
		paddingLeft: 20,
		paddingTop: 10,
		color: 'white',
		fontSize: 20,
	},

	cname: {paddingLeft: 20, paddingTop: 10, color: '#FF8A65', fontSize: 20},

	condition: {paddingLeft: 20, paddingTop: 10, color: 'white', fontSize: 20},

	orangebutton: {
		width: 190,
		height: 45,
		backgroundColor: '#FF8A65',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		shadowRadius: 30,
		shadowOpacity: 20,
		borderRadius: 5,
	},

	whitebutton: {
		width: 120,
		height: 45,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		borderRadius: 5,
	},
});

// =============================================
// Export
// =============================================
export default ListingScreen;
