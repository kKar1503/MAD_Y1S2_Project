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
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';
import CustomButton from '../CustomComponent/CustomButton';
import {LoadUserData} from '../../database/Account';
import {updateUser} from '../../database/Schemas';
import {useIsFocused} from '@react-navigation/native';
import ValidatingInput from '../CustomComponent/ValidationInput';
import DatePicker from 'react-native-date-picker';
import InputField from '../CustomComponent/InputField';

// =============================================
// Edit Profile Page Implementation
// =============================================
const Edit = ({navigation}) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState(new Date());
	const [bio, setBio] = useState('');
	const [phone, setPhone] = useState('');
	const [userid, setUserid] = useState(0);
	const [currentName, setCurrentName] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);

	const isFocused = useIsFocused();

	useEffect(() => {
		LoadUserData().then(data => {
			setName(data.fullname);
			setUsername(data.username);
			setEmail(data.email);
			setBirthday(data.birthday);
			setBio(data.bio);
			setPhone(data.phone.toString());
			setUserid(data.id);
			setCurrentName(data.fullname);
		});
	}, [isFocused]);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={[styles.viewWrapper, {marginBottom: 50}]}>
					<Image
						source={require('../../assets/img/Profile_Image.png')}
						style={{
							borderRadius: 60,
						}}
					/>
					<View style={{marginLeft: 30, alignSelf: 'center'}}>
						<Text
							style={[
								styles.robotoReg,
								{
									fontSize: 25,
									color: 'white',
									marginBottom: 10,
								},
							]}>
							{currentName}
						</Text>
						<Text
							style={[
								styles.robotoReg,
								{
									fontSize: 18,
									color: '#888888',
									marginBottom: 10,
								},
							]}>
							@{username}
						</Text>
					</View>
				</View>

				<ValidatingInput
					style={[styles.textInput, styles.robotoReg]}
					placeholder="Name"
					value={name}
					onChangeText={text => setName(text)}
					maxLength={20}
					type="alpha"
					withSpace={true}
					image={require('../../assets/img/profile.png')}
				/>

				<ValidatingInput
					style={[styles.textInput, styles.robotoReg]}
					placeholder="Email"
					value={email}
					onChangeText={text => setEmail(text)}
					maxLength={30}
					type="email"
					image={require('../../assets/img/email.png')}
					height={13}
					width={19}
				/>

				<View>
					<DatePicker
						modal
						mode="date"
						open={showDatePicker}
						date={birthday}
						onConfirm={date => {
							setShowDatePicker(false);
							setBirthday(date);
						}}
						onCancel={() => {
							setShowDatePicker(false);
						}}
					/>
					<TouchableOpacity
						onPress={() => setShowDatePicker(true)}
						style={{width: '86%'}}>
						<InputField
							placeholder="Birthday"
							style={[
								styles.textInput,
								styles.robotoReg,
								{width: '100%'},
							]}
							editable={false}
							value={`${birthday.getDate()}/${
								birthday.getMonth() + 1
							}/${birthday.getFullYear()}`}
							image={require('../../assets/img/birthday.png')}
						/>
					</TouchableOpacity>
				</View>

				<ValidatingInput
					style={[styles.textInput, styles.robotoReg]}
					placeholder="Bio"
					value={bio}
					onChangeText={text => setBio(text)}
					maxLength={40}
					type="alphanumeric"
					withSpace={true}
					image={require('../../assets/img/info.png')}
					height={17}
					width={17}
				/>

				<ValidatingInput
					style={[styles.textInput, styles.robotoReg]}
					placeholder="Phone"
					value={phone}
					onChangeText={text => setPhone(text)}
					maxLength={10}
					type="phone"
					locale="en-SG"
					image={require('../../assets/img/phone.png')}
					width={18}
					height={18}
				/>
			</ScrollView>
			<View style={styles.footer}>
				<CustomButton
					text="SAVE CHANGES"
					onPress={() => {
						const userObj = {
							id: userid,
							fullname: name,
							email: email,
							birthday: birthday,
							bio: bio,
							phone: parseInt(phone, 10),
						};
						updateUser(userObj)
							.then(() => console.log('updated ur mom'))
							.catch(err => console.log(err));
						navigation.navigate('Profile');
					}}
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
	textInput: {
		marginLeft: 20,
		width: '86%',
		maxHeight: 60,
		color: 'white',
		fontSize: 20,
		paddingBottom: 20,
		paddingLeft: 15,
		textAlignVertical: 'bottom',
	},
	inputFields: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 20,
	},
	footer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		bottom: 0,
		alignSelf: 'center',
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
export default Edit;
