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
import React, {useEffect, forwardRef, useRef, useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import {queryListingByCategory} from '../../database/Schemas';
import PopupMessageDialog from '../CustomComponent/PopupMessageDialog';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
// =============================================
// Main Page Implementation
// =============================================
const STORAGE_CATEGORY = '@current_category';
const STORAGE_SEARCH = '@current_search';
const STORAGE_MODE = '@current_mode';
const Explore = ({navigation}) => {
	const comingSoonDialog = useRef();
	const [numberOfStationery, setNumberOfStationery] = useState(0);
	const [numberOfTextbooks, setNumberOfTextbooks] = useState(0);
	const [search, setSearch] = useState('');
	const [lightMode, setLightMode] = useState(false);

	const showComingSoonDialog = () => {
		comingSoonDialog.current.showDialog();
	};

	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();

	const saveCategory = async cat => {
		try {
			AsyncStorage.removeItem(STORAGE_CATEGORY);
			await AsyncStorage.setItem(STORAGE_CATEGORY, cat);
			console.log('Category saved');
		} catch (e) {
			console.log('Category not saved');
		}
	};

	const saveSearch = async search => {
		try {
			AsyncStorage.removeItem(STORAGE_SEARCH);
			await AsyncStorage.setItem(STORAGE_SEARCH, search);
			console.log('Search saved');
		} catch (e) {
			console.log('Search not saved');
		}
	};

	useEffect(() => {
		queryListingByCategory('stationery')
			.then(listings => setNumberOfStationery(listings.length))
			.catch(err => console.log(err));
		queryListingByCategory('textbook')
			.then(listings => setNumberOfTextbooks(listings.length))
			.catch(err => console.log(err));
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
			<ScrollView>
				<View style={[styles.viewWrapper, styles.searchInputField]}>
					<TextInput
						style={[
							styles.textInput,
							styles.robotoReg,
							{color: lightMode ? 'black' : 'white'},
						]}
						placeholder="Search"
						placeholderTextColor={'#9E9E9E'}
						maxLength={15}
						onChangeText={text => setSearch(text)}
					/>
					<TouchableOpacity
						onPress={() => {
							saveSearch(search);
							navigation.navigate('Search');
						}}>
						<Image
							source={require('../../assets/img/search.png')}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.viewWrapper}>
					<TouchableOpacity
						onPress={() => navigation.navigate('AllSupplies')}
						style={{
							borderRadius: 10,
						}}>
						<Image
							source={require('../../assets/img/main.png')}
							style={{
								width: '100%',
								height: undefined,
								aspectRatio: 1.6,
								borderRadius: 10,
							}}
						/>
						<View
							style={{
								position: 'absolute',
								bottom: 15,
								right: 15,
							}}>
							<Text
								style={[
									{color: 'white', fontSize: 20},
									styles.robotoReg,
								]}>
								Back to School Supplies
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.viewWrapper}>
					<Text
						style={[
							styles.headerText,
							styles.robotoBold,
							{color: lightMode ? 'black' : 'white'},
						]}>
						Categories
					</Text>
				</View>
				<ScrollView
					style={{marginTop: 20, marginLeft: 9, marginBottom: 30}}
					horizontal={true}>
					<TouchableOpacity
						onPress={() => {
							saveCategory('stationery');
							navigation.navigate('Categorised');
						}}
						style={styles.viewWrapperVertical}>
						<Image
							style={styles.catImages}
							source={require('../../assets/img/cat3.png')}
						/>
						<Text
							style={[
								styles.catText,
								styles.robotoReg,
								{color: lightMode ? 'black' : 'white'},
							]}>
							Stationeries
						</Text>
						<Text style={[styles.catItemsText, styles.robotoReg]}>
							{numberOfStationery} Items
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							saveCategory('textbook');
							navigation.navigate('Categorised');
						}}
						style={styles.viewWrapperVertical}>
						<Image
							style={styles.catImages}
							source={require('../../assets/img/cat2.png')}
						/>
						<Text style={[styles.catText, styles.robotoReg]}>
							Textbooks
						</Text>
						<Text style={[styles.catItemsText, styles.robotoReg]}>
							{numberOfTextbooks} Items
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => showComingSoonDialog()}
						style={styles.viewWrapperVertical}>
						<Image
							style={[styles.catImages, {marginRight: 0}]}
							source={require('../../assets/img/cat1.png')}
						/>
						<Text style={[styles.catText, styles.robotoReg]}>
							Art Supplies
						</Text>
						<Text style={[styles.catItemsText, styles.robotoReg]}>
							0 Items
						</Text>
					</TouchableOpacity>
					<ModifiedMessageDialog ref={comingSoonDialog} />
				</ScrollView>
			</ScrollView>
		</View>
	);
};

const ModifiedMessageDialog = forwardRef((props, ref) => (
	<PopupMessageDialog
		header="Coming Soon!"
		text="We will be releasing the Art Supplies category soon! Checkout the other categories in the meantime!"
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
		alignContent: 'flex-start',
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
		width: '86%',
		maxHeight: 60,
		color: 'white',
		fontSize: 20,
		paddingBottom: 20,
		textAlignVertical: 'bottom',
	},
	headerText: {
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
});

// =============================================
// Export
// =============================================
export default Explore;
