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
import React, {forwardRef, useState, useRef, useEffect} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import CustomButton from '../CustomComponent/CustomButton';
import PopupMessageDialog from '../CustomComponent/PopupMessageDialog';
import {LoadUserData} from '../../database/Account';
import {postNewListing, queryAllListings} from '../../database/Schemas';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
// =============================================
// RadioButtons Data
// =============================================
const STORAGE_MODE = '@current_mode';
const conditionRadioButtonsData = [
	{
		id: '1',
		label: 'Brand New',
		value: 'Brand New',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
	{
		id: '2',
		label: 'Used',
		value: 'Used',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
];

const collectionRadioButtonsData = [
	{
		id: '1',
		label: 'Self-Collect',
		value: 'Self-Collect',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
	{
		id: '2',
		label: 'Delivery via Mailing',
		value: 'Delivery via Mailing',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
];

// =============================================
// New Listing Page Implementation
// =============================================
const NewProfile = ({navigation}) => {
	const [dynamicHeight, setDynamicHeight] = useState(60);
	const [selectedCategory, setSelectedCategory] = useState('stationery');
	const [radioButtons1, setRadioButtons1] = useState(
		conditionRadioButtonsData,
	);
	const [radioButtons2, setRadioButtons2] = useState(
		collectionRadioButtonsData,
	);
	const [listingName, setListingName] = useState('');
	const [description, setDescription] = useState('');
	const [lightMode, setLightMode] = useState(false);

	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();

	const dialogRef = useRef();

	useEffect(() => {
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

	const onPressRadioButton1 = radioButtonsArray => {
		setRadioButtons1(radioButtonsArray);
	};

	const onPressRadioButton2 = radioButtonsArray => {
		setRadioButtons2(radioButtonsArray);
	};

	const showEmptyDialog = () => {
		dialogRef.current.showDialog();
	};

	return (
		<View
			style={[
				styles.container,
				{backgroundColor: lightMode ? 'white' : '#303030'},
			]}>
			<ScrollView>
				<View style={styles.inputField}>
					<Image
						style={{
							width: '100%',
							height: undefined,
							aspectRatio: 2,
							alignSelf: 'center',
							borderRadius: 15,
						}}
						resizeMode="contain"
						source={require('../../assets/img/Product1.png')}
					/>
				</View>

				<View style={styles.inputField}>
					<TextInput
						style={[
							styles.textInput,
							styles.robotoReg,
							{color: lightMode ? 'black' : 'white'},
						]}
						placeholder="Listing Name"
						placeholderTextColor={'#9E9E9E'}
						maxLength={50}
						autoCapitalize="words"
						multiline
						numberOfLines={2}
						onChangeText={text => setListingName(text)}
					/>
				</View>

				<View style={styles.inputField}>
					<Text
						style={[
							styles.robotoBold,
							styles.fieldHeader,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Category
					</Text>
					<View
						style={{
							borderColor: '#9e9e9e',
							borderWidth: 3,
							marginTop: 15,
						}}>
						<Picker
							style={{
								color: '#9E9E9E',
							}}
							dropdownIconColor="#9E9E9E"
							selectedValue={selectedCategory}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedCategory(itemValue)
							}>
							<Picker.Item
								label="Stationery"
								value="Stationery"
							/>
							<Picker.Item label="Textbooks" value="Textbook" />
						</Picker>
					</View>
				</View>

				<View style={styles.inputField}>
					<Text
						style={[
							styles.robotoBold,
							styles.fieldHeader,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Condition
					</Text>
					<RadioGroup
						radioButtons={radioButtons1}
						layout="row"
						onPress={() => {
							onPressRadioButton1;
						}}
					/>
				</View>

				<View style={styles.inputField}>
					<Text
						style={[
							styles.robotoBold,
							styles.fieldHeader,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Method of Collection
					</Text>
					<RadioGroup
						radioButtons={radioButtons2}
						layout="row"
						onPress={() => {
							onPressRadioButton2;
						}}
					/>
				</View>

				<View style={styles.inputField}>
					<TextInput
						style={[
							styles.textInput,
							styles.robotoReg,
							{color: lightMode ? 'black' : 'white'},
							{maxHeight: dynamicHeight},
						]}
						onChangeText={text => {
							let newHeight = 60;
							if (text.length > 25) {
								newHeight +=
									((text.length - 30) / 170) * 140 + 40;
							}
							setDynamicHeight(newHeight);
							setDescription(text);
						}}
						placeholder="Brief Description"
						placeholderTextColor={'#9E9E9E'}
						maxLength={200}
						autoCapitalize="words"
						multiline
						numberOfLines={8}
					/>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<CustomButton
					text="NEW LISTING"
					onPress={() => {
						const selectedCondition = radioButtons1.filter(
							option => option.selected === true,
						);
						const selectedMethod = radioButtons2.filter(
							option => option.selected === true,
						);
						if (
							listingName === '' ||
							description === '' ||
							selectedCondition.length === 0 ||
							selectedMethod.length === 0
						) {
							showEmptyDialog();
						} else {
							LoadUserData()
								.then(data => {
									postNewListing(data.fullname, {
										title: listingName,
										collection: selectedMethod[0].value,
										category: selectedCategory,
										condition: selectedCondition[0].value,
										description: description,
									});
									queryAllListings().then(data =>
										console.log(data.length),
									);
								})
								.catch(err => console.log(err));
						}
					}}
					Color="#e88764"
				/>
			</View>
			<ModifiedMessageDialog ref={dialogRef} />
		</View>
	);
};

const ModifiedMessageDialog = forwardRef((props, ref) => (
	<PopupMessageDialog
		header="Error"
		text="All fields are required to fill in to create a new listing!"
		ref={ref}
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
		paddingHorizontal: 15,
	},
	inputField: {
		marginVertical: 20,
		width: '95%',
	},
	textInput: {
		borderBottomColor: '#666666',
		borderBottomWidth: 3,
		width: 325,
		maxHeight: 60,
		alignSelf: 'center',
		fontSize: 20,
		paddingBottom: 20,
		textAlignVertical: 'top',
	},
	fieldHeader: {
		fontSize: 25,
	},
	footer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		bottom: 0,
	},
	button: {
		backgroundColor: '#FF8A65',
		width: '100%',
		height: 65,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		borderRadius: 5,
	},
	buttonWord: {
		color: 'white',
		fontSize: 20,
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
});

// =============================================
// Export
// =============================================
export default NewProfile;
