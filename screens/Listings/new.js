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
import CustomButton from '../CustomComponent/customButton';

// =============================================
// RadioButtons Data
// =============================================
const conditionRadioButtonsData = [
	{
		id: '1',
		label: 'New',
		value: 'new',
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
		value: 'used',
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
		value: 'collection',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
	{
		id: '2',
		label: 'Delivery',
		value: 'delivery',
		borderColor: '#666666',
		color: '#666666',
		labelStyle: {
			color: 'grey',
			fontFamily: 'Roboto-Regular',
		},
	},
];

// =============================================
// Main Page Implementation
// =============================================
const NewProfile = ({navigation}) => {
	const [dynamicHeight, setDynamicHeight] = useState(60);
	const [selectedCategory, setSelectedCategory] = useState('Cat1');
	const [radioButtons1, setRadioButtons1] = useState(
		conditionRadioButtonsData,
	);
	const [radioButtons2, setRadioButtons2] = useState(
		collectionRadioButtonsData,
	);

	function onPressRadioButton1(radioButtonsArray) {
		setRadioButtons1(radioButtonsArray);
	}

	function onPressRadioButton2(radioButtonsArray) {
		setRadioButtons2(radioButtonsArray);
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
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Listing Name"
						placeholderTextColor={'#9E9E9E'}
						maxLength={50}
						autoCapitalize="words"
						multiline
						numberOfLines={2}
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
							dropdownIconColor="#9E9E9E"
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
						radioButtons={radioButtons1}
						layout="row"
						onPress={() => {
							onPressRadioButton1;
							console.log(radioButtons1);
						}}
					/>
				</View>

				<View style={styles.inputField}>
					<Text style={[styles.robotoBold, styles.fieldHeader]}>
						Method of Collection
					</Text>
					<RadioGroup
						radioButtons={radioButtons2}
						layout="row"
						onPress={() => {
							onPressRadioButton2;
							console.log(radioButtons2);
						}}
					/>
				</View>

				<View style={styles.inputField}>
					<TextInput
						style={[
							styles.textInput,
							styles.robotoReg,
							{maxHeight: dynamicHeight},
						]}
						onChangeText={text => {
							let newHeight = 60;
							if (text.length > 25)
								newHeight +=
									((text.length - 30) / 170) * 140 + 40;
							setDynamicHeight(newHeight);
							console.log(dynamicHeight);
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
					text="NEW AD"
					onPress={() => navigation.navigate('Home')}
					Color="#e88764"
				/>
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
	textInput: {
		borderBottomColor: '#666666',
		borderBottomWidth: 3,
		width: 325,
		maxHeight: 60,
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		paddingBottom: 20,
		textAlignVertical: 'top',
	},
	fieldHeader: {
		color: 'white',
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

export default NewProfile;
