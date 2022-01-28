// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

// =============================================
// Implement CustomButton
// =============================================
export default class CustomButton extends Component {
	render() {
		const {text, onPress} = this.props;
		return (
			<TouchableOpacity style={styles.button} onPress={() => onPress()}>
				<Text style={[styles.buttonWord, styles.robotoBold]}>
					{text}
				</Text>
			</TouchableOpacity>
		);
	}
}

// =============================================
// Custom Prop with PropTypes
// =============================================
CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	button: {
		backgroundColor: '#FF8A65',
		width: '88%',
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
	robotoBold: {
		fontFamily: 'Roboto-Bold',
	},
});
