// =============================================
// Import necessary classes for development
// =============================================
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================
const Edit = ({navigation}) => {
	const [name, setName] = useState('Jonathan Ooi');
	const [email, setEmail] = useState('jonathan.ooi@gmail.com');
	const [birthday, setBirthday] = useState('27th November 2021');
	const [location, setLocation] = useState('Singapore');
	const [phone, setPhone] = useState('(+65) 83214321');
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
									marginBottom: 20,
								},
							]}>
							Jonathan Ooi
						</Text>
						<Text
							style={[
								styles.robotoReg,
								{
									fontSize: 15,
									color: '#666666',
									marginBottom: 10,
								},
							]}>
							@jonathanooi
						</Text>
						<Text
							style={[
								styles.robotoReg,
								{fontSize: 15, color: '#666666'},
							]}>
							Member since 1 year ago
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
						value={birthday}
						onChangeText={text => setBirthday(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/location.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Location"
						value={location}
						onChangeText={text => setLocation(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
				<View style={(styles.viewWrapper, styles.inputFields)}>
					<Image source={require('../../assets/img/phone.png')} />
					<TextInput
						style={[styles.textInput, styles.robotoReg]}
						placeholder="Phone"
						value={phone}
						onChangeText={text => setPhone(text)}
						placeholderTextColor={'#9E9E9E'}
						maxLength={40}
					/>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.button}>
					<Text style={[styles.buttonWord, styles.robotoBold]}>
						SAVE CHANGES
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
		width: '95%',
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

export default Edit;
