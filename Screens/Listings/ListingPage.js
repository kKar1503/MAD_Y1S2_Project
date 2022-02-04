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
import React, {useEffect, useState, forwardRef, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import CustomButton from '../CustomComponent/CustomButton';
import {queryListingById} from '../../database/Schemas';
import {LoadListingId} from '../../database/Listings';
import {useIsFocused} from '@react-navigation/native';
import PopupPromptDialog from '../CustomComponent/PopupPromptDialog';
import AsyncStorage from '@react-native-community/async-storage';
import {useDrawerStatus} from '@react-navigation/drawer';

// =============================================
// Main Page Implementation
// =============================================
const STORAGE_OWNER = '@current_owner';

const ListingScreen = ({navigation}) => {
	const [title, setTitle] = useState('');
	const [owner, setOwner] = useState('');
	const [collection, setCollection] = useState('');
	const [category, setCategory] = useState('');
	const [condition, setCondition] = useState('');
	const [description, setDescription] = useState('');
	const [buttonColor, setButtonColor] = useState('#e88764');
	const [buttonText, setButtonText] = useState('RESERVE');
	const [lightMode, setLightMode] = useState(false);

	const prompt1 = useRef();
	const prompt2 = useRef();
	const STORAGE_MODE = '@current_mode';
	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();

	const showPrompt1 = () => {
		prompt1.current.showDialog();
	};

	const showPrompt2 = () => {
		prompt2.current.showDialog();
	};

	const hidePrompt1 = () => {
		prompt1.current.hideDialog();
	};

	const hidePrompt2 = () => {
		prompt2.current.hideDialog();
	};

	const fetchData = async () => {
		const listingId = await LoadListingId();
		const listing = queryListingById(parseInt(listingId, 10));
		return new Promise((resolve, reject) => resolve(listing));
	};

	useEffect(() => {
		fetchData()
			.then(listing => {
				setTitle(listing.title);
				setOwner(listing.owner);
				setCollection(listing.collection);
				setCategory(listing.category);
				setCondition(listing.condition);
				setDescription(listing.description);
			})
			.then(err => console.log(err));

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

	return (
		<View
			style={[
				styles.container,
				{backgroundColor: lightMode ? 'white' : '#303030'},
			]}>
			<ScrollView style={{paddingTop: 40}}>
				<Image
					source={require('../../assets/img/Product1.png')}
					style={styles.productpic}
				/>

				<Text
					style={[
						styles.title,
						{color: lightMode ? 'black' : 'white'},
					]}>
					{title}
				</Text>

				<Text style={styles.user}>{owner}</Text>

				<Text
					style={[
						styles.collection,
						{color: lightMode ? 'black' : 'white'},
					]}>
					{collection}
				</Text>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text
						style={[
							styles.category,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Category:
					</Text>
					<Text
						style={[
							styles.cname,
							{color: lightMode ? 'black' : 'white'},
						]}>
						{category}
					</Text>
				</View>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text
						style={[
							styles.condition,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Condition:
					</Text>
					<Text
						style={[
							styles.condition,
							{color: lightMode ? 'black' : 'white'},
						]}>
						{condition}
					</Text>
				</View>

				<View style={{paddingLeft: 10, paddingTop: 10}}>
					<Text
						style={[
							styles.content,
							{color: lightMode ? 'black' : 'grey'},
						]}>
						{description}
					</Text>
				</View>
			</ScrollView>
			<Prompt1
				ref={prompt1}
				onPressConfirm={() => {
					hidePrompt1();
					showPrompt2();
				}}
				onPressCancel={() => {
					hidePrompt1();
				}}
			/>
			<Prompt2
				ref={prompt2}
				onPressConfirm={() => {
					hidePrompt2();
					navigation.navigate('AddReviews');
				}}
				onPressCancel={() => {
					hidePrompt2();
				}}
			/>
			<View
				style={{
					flexDirection: 'row',
					position: 'absolute',
					bottom: 50,
				}}>
				<CustomButton
					text={buttonText}
					onPress={() => {
						AsyncStorage.removeItem(STORAGE_OWNER);
						AsyncStorage.setItem(STORAGE_OWNER, owner);
						setButtonColor('grey');
						setButtonText('RESERVED');
						showPrompt1();
					}}
					ButtonHeight={45}
					ButtonWidth={'45%'}
					TextFont={25}
					Color={buttonColor}
				/>
				<CustomButton
					text="CONTACT"
					onPress={() => {
						navigation.navigate('ChattingProduct');
					}}
					ButtonHeight={45}
					ButtonWidth={'33%'}
					Color={lightMode ? 'grey' : 'white'}
					TextFont={25}
					TextColor={lightMode ? 'white' : 'black'}
				/>
			</View>
		</View>
	);
};

const Prompt1 = forwardRef((props, ref) => (
	<PopupPromptDialog
		header="Success"
		text="Reserved successful!"
		ref={ref}
		{...props}
	/>
));
const Prompt2 = forwardRef((props, ref) => (
	<PopupPromptDialog
		header="Completed"
		text="Transaction is now completed, woudl you like to drop a review?"
		ref={ref}
		{...props}
	/>
));

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		fontSize: 15,
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

	title: {paddingLeft: 10, paddingTop: 30, fontSize: 25, color: 'white'},

	user: {paddingLeft: 10, paddingTop: 10, color: '#FF8A65'},

	collection: {paddingTop: 10, paddingLeft: 10, color: 'white', fontSize: 20},

	category: {
		paddingLeft: 10,
		paddingTop: 10,
		color: 'white',
		fontSize: 20,
	},

	cname: {paddingLeft: 10, paddingTop: 10, color: '#FF8A65', fontSize: 20},

	condition: {paddingLeft: 10, paddingTop: 10, color: 'white', fontSize: 20},

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
