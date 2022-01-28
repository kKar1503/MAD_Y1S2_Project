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
// Custom Button Implementation
// =============================================
export default class CustomButton extends Component {
	render() {
		const {
			text,
			onPress,
			Color,
			ButtonHeight,
			ButtonWidth,
			ButtonMargin,
			TextColor,
			TextFont,
		} = this.props;
		return (
			<TouchableOpacity
				style={[
					styles.button,
					{
						backgroundColor: Color,
						height: ButtonHeight,
						width: ButtonWidth,
						margin: ButtonMargin,
					},
				]}
				onPress={() => onPress()}>
				<Text
					style={[
						styles.robotoBold,
						{fontSize: TextFont, color: TextColor},
					]}>
					{text}
				</Text>
			</TouchableOpacity>
		);
	}
}

// =============================================
// Custom Prop using PropTypes
// =============================================
CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	Color: PropTypes.string,
	ButtonHeight: PropTypes.number,
	ButtonMargin: PropTypes.number,
	TextColor: PropTypes.string,
	TextFont: PropTypes.number,
	ButtonWidth: PropTypes.string,
};

// =============================================
// Default Props
// =============================================
CustomButton.defaultProps = {
	ButtonHeight: 65,
	ButtonWidth: '88%',
	ButtonMargin: 20,
	TextColor: 'white',
	TextFont: 20,
	Color: '#e88764',
};

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},

	robotoBold: {
		fontFamily: 'Roboto-Bold',
	},
});
