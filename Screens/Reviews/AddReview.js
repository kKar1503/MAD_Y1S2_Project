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
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {postNewReview} from '../../database/Schemas';
import {LoadUserData} from '../../database/Account';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

// =============================================
// Main Page Implementation
// =============================================
const STORAGE_OWNER = '@current_owner';

const Review = ({navigation}) => {
	const [selectedCategory, setSelectedCategory] = useState(1);
	const [lightMode, setLightMode] = useState(false);
	const [owner, setOwner] = useState('');
	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();
	const STORAGE_MODE = '@current_mode';

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
		AsyncStorage.getItem(STORAGE_OWNER, (err, res) => {
			if (!err) {
				setOwner(res);
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
			<View style={styles.orangeContainer}>
				<Image
					source={require('../../assets/img/ratingscreen.png')}
					style={styles.styleimage}
				/>
				<Text style={styles.text}>Please rate your experience!</Text>
				<View
					style={{
						flexDirection: 'row',
						paddingLeft: 50,
						alignContent: 'center',
						alignItems: 'center',
						alignSelf: 'flex-start',
						flex: 1,
					}}>
					<Text
						style={{
							color: 'white',
							marginTop: 15,
							fontSize: 20,
							padding: 20,
						}}>
						Stars:
					</Text>
					<View
						style={{
							borderColor: 'white',
							borderWidth: 3,
							marginTop: 15,
							height: '30%',
							width: '50%',
						}}>
						<Picker
							style={{
								color: 'white',
							}}
							dropdownIconColor="#9E9E9E"
							selectedValue={selectedCategory}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedCategory(itemValue)
							}>
							<Picker.Item label="1 stars" value={1} />
							<Picker.Item label="2 stars" value={2} />
							<Picker.Item label="3 stars" value={3} />
							<Picker.Item label="4 stars" value={4} />
							<Picker.Item label="5 stars" value={5} />
						</Picker>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={async () => {
							const user = await LoadUserData();
							postNewReview(user.fullname, {
								stars: selectedCategory,
								reviewee: user.fullname,
								owner: owner,
							});
							navigation.navigate('Listing');
						}}>
						<View>
							<Text style={styles.buttonText}>SUBMIT</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Listing');
						}}>
						<View>
							<Text style={styles.buttonText}>CANCEL</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
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
		alignContent: 'center',
		backgroundColor: '#303030',
		paddingHorizontal: 15,
		position: 'absolute',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	orangeContainer: {
		backgroundColor: '#f0855b',
		width: '99%',
		height: '57%',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	styleimage: {
		width: '20%',
		height: '15%',
		marginTop: 50,
		marginBottom: 30,
		alignSelf: 'center',
	},
	text: {
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},
	textInput: {
		color: 'white',
		textAlign: 'left',
		fontSize: 23,
		flexWrap: 'wrap',
	},
	inputContainer: {
		borderWidth: 2,
		borderColor: 'white',
		width: '90%',
		height: '30%',
		alignSelf: 'center',
		flexWrap: 'wrap',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	buttonText: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: 'white',
		margin: 20,
		paddingHorizontal: 31,
		paddingVertical: 13,
		fontWeight: '800',
	},
});

export default Review;
