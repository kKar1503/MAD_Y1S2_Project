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
import {StyleSheet, TextInput} from 'react-native';

// =============================================
// Define Colors
// =============================================
const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

// =============================================
// Implementation of Login TextInput
// =============================================
export default class LoginInput extends Component {
	state = {
		isFocused: false,
		Text: '',
		value: '',
	};

	handleFocus = event => {
		this.setState({isFocused: true});
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
	};

	handleBlur = event => {
		this.setState({isFocused: false});
		if (this.props.onBlur) {
			this.props.onBlur(event);
		}
	};

	render() {
		const {isFocused} = this.state;
		const {onFocus, onBlur, ...otherProps} = this.props;

		return (
			<TextInput
				selectionColor={BLUE}
				underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
				placeholder
				placeholderTextColor="#9E9E9E"
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
				style={styles.textInput}
				onChangeText={text => this.props.onChangeText(text)}
				value={this.props.value}
				{...otherProps}
			/>
		);
	}
}

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	textInput: {
		height: 40,
		paddingLeft: 6,
	},
});
