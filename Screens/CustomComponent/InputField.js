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
import {StyleSheet, TextInput, View, Image} from 'react-native';
import PropTypes from 'prop-types';

// =============================================
// Define Colors
// =============================================
const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

// =============================================
// Implementation of Login TextInput
// =============================================
export default class InputField extends Component {
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
		const {image, width, height, onFocus, onBlur, ...otherProps} =
			this.props;

		return (
			<View style={styles.inputcontainer}>
				<Image
					source={image}
					style={{alignSelf: 'center', height: height, width: width}}
				/>
				<TextInput
					selectionColor={BLUE}
					underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
					placeholder
					placeholderTextColor="#9E9E9E"
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					style={styles.textInput}
					onChangeText={text =>
						this.props.onChangeText(text.toString())
					}
					value={this.props.value}
					{...otherProps}
				/>
			</View>
		);
	}
}

InputField.propTypes = {
	image: PropTypes.func,
	width: PropTypes.number,
	height: PropTypes.number,
};
InputField.defaultProps = {
	width: 20,
	height: 20,
};
// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	textInput: {
		height: 40,
		paddingLeft: 6,
	},
	inputcontainer: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingLeft: 28,
	},
});
