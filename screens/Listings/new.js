// =============================================
// Import Necessary Classes for Development
// =============================================
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';

// =============================================
// RadioButtons Data
// =============================================
const radioButtonsData = [
	{
		id: '1',
		label: 'Option 1',
		value: 'val1',
	},
	{
		id: '2',
		label: 'Option 2',
		value: 'val2',
	},
];

// =============================================
// Main Page Implementation
// =============================================
const NewProfile = ({navigation}) => {
	const [selectedCategory, setSelectedCategory] = useState('hello');
	const [radioButtons, setRadioButtons] = useState(radioButtonsData);

	function onPressRadioButton(radioButtonsArray) {
		setRadioButtons(radioButtonsArray);
	}

	return (
		<View style={styles.container}>
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
						style={[styles.listingNameInput, styles.robotoReg]}
						placeholder="Listing Name"
						placeholderTextColor={'#9E9E9E'}
					/>
				</View>

				<View style={styles.inputField}>
					<Text style={[styles.robotoBold, styles.fieldHeader]}>
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
							dropdownIconColor="#9e9e9e"
							selectedValue={selectedCategory}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedCategory(itemValue)
							}>
							<Picker.Item label="Category 1" value="cat1" />
							<Picker.Item label="Category 2" value="cat2" />
						</Picker>
					</View>
				</View>

				<View style={styles.inputField}>
					<Text style={[styles.robotoBold, styles.fieldHeader]}>
						Condition
					</Text>
					<RadioGroup
						radioButtons={radioButtons}
						onPress={() => {
							onPressRadioButton;
							console.log(radioButtons);
						}}
					/>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.button}>
					<Text style={[styles.buttonWord, styles.robotoBold]}>
						POST NEW AD
					</Text>
				</TouchableOpacity>
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
		alignItems: 'center',
		backgroundColor: '#303030',
		paddingHorizontal: 15,
	},
	inputField: {
		marginVertical: 20,
		width: '95%',
	},
	listingNameInput: {
		borderBottomColor: '#666666',
		borderBottomWidth: 3,
		width: '100%',
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		paddingBottom: 20,
	},
	fieldHeader: {
		color: 'white',
		fontSize: 25,
	},
	footer: {
		width: '95%',
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

export default NewProfile;
