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
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';

import InputField from './CustomComponent/InputField';
import ValidatingInput from './CustomComponent/ValidationInput';
import CustomButton from './CustomComponent/CustomButton';
import {Authenticate, Signup} from '../database/Account';
import PopupMessageDialog from './CustomComponent/PopupMessageDialog';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-community/async-storage';
// =============================================
// Main Page Implementation
// =============================================
const STORAGE_USERID = '@current_login_id';
const defaultDate = new Date();
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			username: '',
			password: '',
			newUsername: '',
			newName: '',
			newEmail: '',
			newBirthday: defaultDate,
			newPhone: '',
			newPassword: '',
			newConfirmPassword: '',
			validInputs: false,
			showDatePicker: false,
		};
	}

	handleShow = () => {
		this.setState({
			isActive: true,
		});
	};

	handleHide = () => {
		this.setState({
			isActive: false,
		});
	};

	changeUserName = text => {
		this.setState({username: text});
	};

	changePassword = text => {
		this.setState({password: text});
	};

	changeNewUserName = text => {
		this.setState({newUsername: text});
	};

	changeNewName = text => {
		this.setState({newName: text});
	};

	changeNewEmail = text => {
		this.setState({newEmail: text});
	};

	changeNewPhone = text => {
		this.setState({newPhone: text});
	};

	changeNewPassword = text => {
		this.setState({newPassword: text});
	};

	changeNewConfirmPassword = text => {
		this.setState({newConfirmPassword: text});
	};

	toggleValidInputs = validation => {
		this.setState({validInputs: validation});
	};

	toggleDatePicker = show => {
		this.setState({showDatePicker: show});
	};

	setBirthday = date => {
		this.setState({newBirthday: date});
	};

	showWrongLoginDialog = () => {
		this.wrongLoginDialog.showDialog();
	};

	showPasswordMismatchDialog = () => {
		this.passwordMismatchDialog.showDialog();
	};

	showInvalidInputsDialog = () => {
		this.invalidInputsDialog.showDialog();
	};

	showSignupFailedDialog = () => {
		this.signupFailedDialog.showDialog();
	};

	saveUserIdReference = async id => {
		try {
			AsyncStorage.clear();
			await AsyncStorage.setItem(STORAGE_USERID, id.toString());
			console.log('Data saved');
		} catch (e) {
			console.log('Data not saved');
		}
	};

	handleIsValidated = () => {
		let isValidated = false;
		if (
			this.usernameInput.isValid() &&
			this.fullnameInput.isValid() &&
			this.emailInput.isValid() &&
			this.phoneInput.isValid() &&
			this.passwordInput.isValid() &&
			this.password2Input.isValid()
		) {
			console.log('all valid');
			isValidated = true;
		}
		return isValidated;
	};

	notactive = () => {
		const {username, password} = this.state;
		return (
			<View>
				<InputField
					placeholder="Username"
					style={styles.textinput}
					onChangeText={this.changeUserName}
					value={username}
					image={require('../assets/img/profile.png')}
				/>

				<InputField
					placeholder="Password"
					style={styles.textinput}
					onChangeText={this.changePassword}
					value={password}
					secureTextEntry={true}
					image={require('../assets/img/password.png')}
					height={32}
					width={18}
				/>

				<View style={{alignItems: 'center'}}>
					<CustomButton
						text="SIGN IN"
						onPress={() => {
							Authenticate(username, password)
								.then(user => {
									this.saveUserIdReference(user.id);
									this.setState({username: '', password: ''});
									this.props.navigation.navigate('Home');
								})
								.catch(err => {
									console.log(err);
									this.showWrongLoginDialog();
								});
						}}
						TextFont={25}
						ButtonWidth={'60%'}
					/>
				</View>
				<PopupMessageDialog
					header="Error"
					text="Your login credentials are incorrect, if you do not have an account please click Sign up!"
					ref={c => (this.wrongLoginDialog = c)}
				/>
				<TouchableOpacity>
					<Text style={styles.question}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
		);
	};
	active = () => {
		const {
			newUsername,
			newPassword,
			newConfirmPassword,
			newName,
			newEmail,
			newBirthday,
			newPhone,
			validInputs,
			showDatePicker,
		} = this.state;

		return (
			<ScrollView>
				<ValidatingInput
					placeholder="Username"
					style={styles.textinput}
					onChangeText={this.changeNewUserName}
					value={newUsername}
					type="alphanumeric"
					image={require('../assets/img/profile.png')}
					ref={r => (this.usernameInput = r)}
				/>

				<ValidatingInput
					placeholder="Full Name"
					style={styles.textinput}
					onChangeText={this.changeNewName}
					value={newName}
					type="alpha"
					withSpace={true}
					image={require('../assets/img/profile.png')}
					ref={r => (this.fullnameInput = r)}
				/>

				<ValidatingInput
					placeholder="Email Address"
					style={styles.textinput}
					onChangeText={this.changeNewEmail}
					value={newEmail}
					type="email"
					height={15}
					image={require('../assets/img/email.png')}
					ref={r => (this.emailInput = r)}
				/>

				<View>
					<DatePicker
						modal
						mode="date"
						open={showDatePicker}
						date={newBirthday}
						onConfirm={date => {
							console.log(date);
							console.log(typeof date);
							this.toggleDatePicker(false);
							this.setBirthday(date);
						}}
						onCancel={() => {
							this.toggleDatePicker(false);
						}}
					/>
					<TouchableOpacity
						onPress={() => this.toggleDatePicker(true)}
						style={{width: '86%'}}>
						<InputField
							placeholder="Birthday"
							style={[styles.textinput, {width: '100%'}]}
							editable={false}
							value={
								newBirthday === defaultDate
									? null
									: `${newBirthday.getDate()}/${
											newBirthday.getMonth() + 1
									  }/${newBirthday.getFullYear()}`
							}
							image={require('../assets/img/birthday.png')}
						/>
					</TouchableOpacity>
				</View>

				<ValidatingInput
					placeholder="Mobile Phone"
					style={styles.textinput}
					onChangeText={this.changeNewPhone}
					value={newPhone}
					type="phone"
					locale="en-SG"
					image={require('../assets/img/phone.png')}
					ref={r => (this.phoneInput = r)}
				/>

				<ValidatingInput
					placeholder="Password"
					style={styles.textinput}
					onChangeText={this.changeNewPassword}
					value={newPassword}
					secureTextEntry={true}
					type="password"
					image={require('../assets/img/password.png')}
					height={32}
					width={18}
					ref={r => (this.passwordInput = r)}
				/>

				<ValidatingInput
					placeholder="Comfirm Password"
					style={styles.textinput}
					onChangeText={this.changeNewConfirmPassword}
					value={newConfirmPassword}
					secureTextEntry={true}
					type="password"
					image={require('../assets/img/password.png')}
					height={32}
					width={18}
					ref={r => (this.password2Input = r)}
				/>

				<View style={{alignItems: 'center', bottom: 0}}>
					<CustomButton
						text="SIGN UP"
						onPress={() => {
							console.log({newUsername});
							console.log({newName});
							console.log({newEmail});
							console.log({newBirthday});
							console.log({newPhone});
							console.log({newPassword});
							console.log({newConfirmPassword});
							this.toggleValidInputs(this.handleIsValidated());
							if (!validInputs) {
								this.showInvalidInputsDialog();
							} else if (newPassword !== newConfirmPassword) {
								this.showPasswordMismatchDialog();
							} else {
								const newUser = {
									username: newUsername,
									password: newPassword,
									fullname: newName,
									email: newEmail,
									birthday: newBirthday,
									phone: parseInt(newPhone, 10),
								};
								this.setState({
									newUsername: '',
									newPassword: '',
									newConfirmPassword: '',
									newName: '',
									newEmail: '',
									newBirthday: defaultDate,
									newPhone: '',
								});
								Signup(newUser)
									.then(() => {
										this.handleHide();
									})
									.catch(() => {
										this.showSignupFailedDialog();
									});
							}
						}}
						TextFont={25}
						ButtonWidth={'60%'}
					/>
				</View>
				<PopupMessageDialog
					header="Error"
					text="Your password does not match, please check again!"
					ref={c => (this.passwordMismatchDialog = c)}
				/>
				<PopupMessageDialog
					header="Error"
					text="Please check the input fields"
					ref={c => (this.invalidInputsDialog = c)}
				/>
				<PopupMessageDialog
					header="Error"
					text="Unable to create account, please try again later!"
					ref={c => (this.signupFailedDialog = c)}
				/>
			</ScrollView>
		);
	};

	render(navigation) {
		return (
			<ScrollView style={styles.container}>
				<View>
					<View style={styles.logo}>
						<Image
							source={require('../assets/img/logo.png')}
							style={styles.styleimage}
						/>
						<Text style={styles.handitdown}>HAND IT DOWN</Text>
						<Text style={styles.knowledge}>
							PASSING THE KNOWLEDGE
						</Text>
					</View>

					<View style={styles.rowButton}>
						<TouchableOpacity onPress={this.handleHide}>
							{this.state.isActive ? (
								<Text style={styles.whitesignin}>Sign In</Text>
							) : (
								<Text style={styles.activesignin}>Sign In</Text>
							)}
						</TouchableOpacity>

						<TouchableOpacity onPress={this.handleShow}>
							{this.state.isActive ? (
								<Text style={styles.activesignup}>Sign Up</Text>
							) : (
								<Text style={styles.whitesignup}>Sign Up</Text>
							)}
						</TouchableOpacity>
					</View>

					{this.state.isActive ? this.active() : this.notactive()}
				</View>
			</ScrollView>
		);
	}
}

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#424242',
	},
	inputcontainer: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingLeft: 28,
	},
	logo: {
		paddingTop: 20,
	},
	rowButton: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 20,
		alignContent: 'center',
	},
	styleimage: {
		alignSelf: 'center',
		width: 122,
		height: 150,
		paddingTop: 10,
	},
	handitdown: {
		alignSelf: 'center',
		color: 'rgba(54, 153, 255, 1)',
		fontSize: 25,
		fontWeight: '700',
		fontFamily: 'Montserrat',
	},
	knowledge: {
		alignSelf: 'center',
		color: 'rgba(54, 153, 255, 1)',
		fontSize: 15,
		fontWeight: '700',
		fontFamily: 'Montserrat',
	},
	whitesignin: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 15,
		marginLeft: 75,
		marginTop: 30,
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	},
	activesignin: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 15,
		marginLeft: 75,
		marginTop: 30,
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: '#ff9e61',
	},
	whitesignup: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 15,
		marginTop: 30,
		marginRight: 80,
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	},
	activesignup: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 15,
		marginTop: 30,
		marginRight: 80,
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: '#e88764',
	},
	textinput: {
		paddingLeft: 10,
		paddingTop: 10,
		fontSize: 20,
		fontWeight: '300',
		margin: 16,
		height: 50,
		color: 'white',
		width: '86%',
	},
	button: {
		height: 60,
		width: '86%',
		backgroundColor: '#e88764',
		alignItems: 'center',
		alignSelf: 'center',
		margin: 20,
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'relative',
		marginTop: 25,
		borderRadius: 5,
		shadowOffset: {
			width: 10,
			height: 10,
		},
	},
	userpic: {
		width: 20,
		height: 20,
		alignSelf: 'center',
	},
	passpic: {
		width: 18,
		height: 32,
		alignSelf: 'center',
	},
	buttontext: {
		color: 'white',
		fontSize: 20,
		fontWeight: '700',
	},
	question: {
		color: 'red',
		alignSelf: 'center',
		padding: 6,
		fontSize: 17,
	},
});

// =============================================
// Export
// =============================================
export default Login;
