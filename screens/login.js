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

import MyTextInput from './CustomComponent/loginInput';
import OrangeButton from './CustomComponent/orangeButton';

// =============================================
// Main Page Implementation
// =============================================
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			username: '',
			password: '',
			newUsername: '',
			newPassword: '',
			confirmPassword: '',
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
	changeNewPassword = text => {
		this.setState({newPassword: text});
	};
	changeConfirmPassword = text => {
		this.setState({confirmPassword: text});
	};

	notactive = () => {
		return (
			<View>
				<View style={styles.inputcontainer}>
					<Image
						source={require('../assets/img/profile.png')}
						style={styles.userpic}
					/>
					<MyTextInput
						placeholder="Username"
						style={styles.textinput}
						onChangeText={() => this.changeUserName()}
						value={this.username}
					/>
				</View>

				<View style={styles.inputcontainer}>
					<Image
						source={require('../assets/img/password.png')}
						style={styles.passpic}
					/>
					<MyTextInput
						placeholder="Password"
						style={styles.textinput}
						onChangeText={() => this.changePassword()}
						value={this.password}
					/>
				</View>

				<OrangeButton
					text="SIGN IN"
					onPress={() => this.props.navigation.navigate('Explore')}
				/>
				<TouchableOpacity>
					<Text style={styles.question}>forgot password ?</Text>
				</TouchableOpacity>
			</View>
		);
	};
	active = () => {
		return (
			<View>
				<View style={styles.inputcontainer}>
					<Image
						source={require('../assets/img/profile.png')}
						style={styles.userpic}
					/>
					<MyTextInput
						placeholder="New Username"
						style={styles.textinput}
						onChangeText={() => this.changeNewUserName()}
						value={this.newUsername}
					/>
				</View>

				<View style={styles.inputcontainer}>
					<Image
						source={require('../assets/img/password.png')}
						style={styles.passpic}
					/>
					<MyTextInput
						placeholder="New Password"
						style={styles.textinput}
						onChangeText={() => this.changeNewPassword()}
						value={this.newPassword}
					/>
				</View>
				<View style={styles.inputcontainer}>
					<Image
						source={require('../assets/img/password.png')}
						style={styles.passpic}
					/>
					<MyTextInput
						placeholder="Comfirm Password"
						style={styles.textinput}
						onChangeText={() => this.changeConfirmPassword()}
						value={this.confirmPassword}
					/>
				</View>
				<View>
					<OrangeButton
						text="SIGN UP"
						onPress={() =>
							this.props.navigation.navigate('Explore')
						}
					/>
					<TouchableOpacity>
						<Text style={styles.question}>
							Already have an account ?
						</Text>
					</TouchableOpacity>
				</View>
			</View>
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
	styleimage: {alignSelf: 'center', width: 122, height: 150, paddingTop: 10},

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
		color: 'white',
		alignSelf: 'center',
		padding: 6,
	},
});

export default Login;
