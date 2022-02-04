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
import {LoadUserData} from '../../database/Account';
import {queryListingByCategory} from '../../database/Schemas';
import PopupMessageDialog from '../CustomComponent/PopupMessageDialog';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
// =============================================
// Main Page Implementation
// =============================================
const STORAGE_CATEGORY = '@current_category';
const STORAGE_SEARCH = '@current_search';
const Explore = ({navigation}) => {
	const comingSoonDialog = useRef();
	const [numberOfStationery, setNumberOfStationery] = useState(0);
	const [numberOfTextbooks, setNumberOfTextbooks] = useState(0);

	const showComingSoonDialog = () => {
		comingSoonDialog.current.showDialog();
	};

	const isFocused = useIsFocused();

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
	}, [isFocused]);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={[styles.viewWrapper, styles.searchInputField]}>
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Search"
						placeholderTextColor={'#9E9E9E'}
						maxLength={15}
					/>
					<TouchableOpacity
						onPress={() =>
							queryAllReviewsOfUser('Jialur')
								.then(data => console.log('hello'))
								.catch(err => console.log(err))
						}>
						<Image
							source={require('../../assets/img/search.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () => {
							const user = await LoadUserData();
							postNewReview('Kar Lok', {
								stars: 1,
								reviewee: 'yay',
							})
								.then(data => console.log('help'))
								.catch(err => console.log(err));
						}}
						style={{translateX: 30}}>
						<Image
							source={require('../../assets/img/filter.png')}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.viewWrapper}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Product')}
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
					<Text style={[styles.headerText, styles.robotoBold]}>
						Categories
					</Text>
				</View>
				<ScrollView
					style={{marginTop: 20, marginLeft: 9, marginBottom: 30}}
					horizontal={true}>
					<TouchableOpacity style={styles.viewWrapperVertical}>
						<Image
							style={styles.catImages}
							source={require('../../assets/img/cat3.png')}
						/>
						<Text style={[styles.catText, styles.robotoReg]}>
							Stationeries
						</Text>
						<Text style={[styles.catItemsText, styles.robotoReg]}>
							{numberOfStationery} Items
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.viewWrapperVertical}>
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
});

// =============================================
// Export
// =============================================
export default Explore;
