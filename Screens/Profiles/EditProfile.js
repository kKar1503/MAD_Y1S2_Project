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
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native';
import CustomButton from '../CustomComponent/CustomButton';
import {LoadUserData} from '../../database/Account';
import {updateUser} from '../../database/Schemas';

// =============================================
// Edit Profile Page Implementation
// =============================================
const Edit = ({navigation}) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState(new Date());
	const [bio, setBio] = useState('');
	const [phone, setPhone] = useState(0);
	const [userid, setUserid] = useState(0);

	useEffect(() => {
		LoadUserData().then(data => {
			setName(data.fullname);
			setUsername(data.username);
			setEmail(data.email);
			setBirthday(data.birthday);
			setBio(data.bio);
			setPhone(data.phone);
			setUserid(data.id);
		});
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={[styles.viewWrapper, {marginBottom: 50}]}>
					<TouchableOpacity>
						<Image
							source={require('../../assets/img/Profile_Image.png')}
							style={{
								borderRadius: 60,
							}}
						/>
					</TouchableOpacity>
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
							{name}
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

				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/profile.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Name"
						value={name}
						onChangeText={text => setName(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/email.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Email"
						value={email}
						onChangeText={text => setEmail(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/birthday.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Birthday"
						value={`${birthday.getDate()}/${birthday.getMonth()}/${birthday.getFullYear()}`}
						// onChangeText={text => setBirthday(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/location.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Bio"
						value={bio}
						onChangeText={text => setBio(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/phone.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Phone"
						value={phone.toString()}
						onChangeText={text => {
							setPhone(parseInt(text, 10));
						}}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
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
							phone: phone,
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
		borderBottomColor: '#666666',
		borderBottomWidth: 3,
		marginLeft: 20,
		width: 300,
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
