// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import validator from 'validator';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, StyleSheet, View} from 'react-native';
import InputField from './InputField';

// =============================================
// Implementation of Validating TextInput
// =============================================
class ValidatingInput extends Component {
	constructor(props) {
		super(props);

		const value = this.parseValue(this.props.value);

		this.state = {
			value: value,
			validated: true,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const props_value = this.parseValue(this.props.value);
		const state_value = this.parseValue();
		if (this.props.value == null) {
		} else if (prevProps.value !== this.props.value) {
			this.validate(props_value);
		} else if (prevState.value !== state_value) {
			this.validate();
		}
	}

	getLocale() {
		return this.props.locale != null ? this.props.locale : 'any';
	}

	getType() {
		return this.props.type != null ? this.props.type : '';
	}

	parseValue(value = null) {
		if (value == null) {
			value = this.state.value;
		}
		value = value == null ? '' : value;
		value = String(value).trim();
		return value;
	}

	isValidated() {
		return this.state.validated;
	}

	isValid(value = null) {
		let is_valid = true;
		const text = this.parseValue(value).trim();

		switch (this.getType()) {
			case 'email':
				if (!validator.isEmail(text)) {
					is_valid = false;
				}
				break;
			case 'alpha':
				if (this.props.withSpace) {
					if (!validator.isAlpha(text, undefined, {ignore: ' '})) {
						is_valid = false;
					}
				} else {
					if (!validator.isAlpha(text)) {
						is_valid = false;
					}
				}
				break;
			case 'alphanumeric':
				if (this.props.withSpace) {
					if (
						!validator.isAlphanumeric(text, undefined, {
							ignore: ' ',
						})
					) {
						is_valid = false;
					}
				} else {
					if (!validator.isAlphanumeric(text)) {
						is_valid = false;
					}
				}
				break;
			case 'phone':
				if (!validator.isMobilePhone(text, this.getLocale())) {
					is_valid = false;
				}
				break;
			case 'number':
				if (!this.isNumeric(text) && !validator.isNumeric(text)) {
					is_valid = false;
				}
				break;
			case 'password':
				if (
					!validator.isStrongPassword(text, {
						minLength: 10,
						minLowercase: 1,
						minUppercase: 1,
						minNumbers: 1,
						minSymbols: 1,
					})
				) {
					is_valid = false;
				}
				break;
		}

		if (validator.isEmpty(text)) {
			is_valid = !this.props.required;
		}

		return is_valid;
	}

	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	validate(value = null) {
		const text = this.parseValue(value);
		const valid = this.isValid(text);
		this.setState({value: text, validated: valid});
		return valid;
	}

	blur() {
		this.input.blur();
		Keyboard.dismiss();
	}

	focus() {
		this.input.focus();
	}

	update() {
		this.input.update();
	}

	clear() {
		this.input.clear();
	}

	onChangeText(text) {
		this.validate(text);
		if (this.props.onChangeText) {
			this.props.onChangeText(text);
		}
	}

	isFocused() {
		return this.input.isFocused();
	}

	render() {
		let props = {
			...this.props,
			onChangeText: this.onChangeText.bind(this),
			style: [this.props.style],
		};

		let keyboardType = 'default';

		if (this.props.type === 'number') {
			keyboardType = 'numeric';
		}

		if (this.props.type) {
			switch (this.props.type) {
				case 'email':
					keyboardType = 'email-address';
					break;
				case 'phone':
					keyboardType = 'phone-pad';
					break;
			}
		}

		delete props.children;
		delete props.onRef;
		delete props.ref;

		if (props.editable === false) {
			props.pointerEents = 'none';
		}

		return (
			<View>
				<InputField
					ref={r => {
						this.input = r;
					}}
					keyboardType={keyboardType}
					autoFocus={false}
					underlineColorAndroid={
						this.state.validated ? '#D3D3D3' : 'red'
					}
					{...props}
				/>
			</View>
		);
	}
}

// =============================================
// Defining Prop Types
// =============================================
ValidatingInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	locale: PropTypes.string,
	onChangeText: PropTypes.func,
	withSpace: PropTypes.bool,
};

// =============================================
// Default Prop
// =============================================
ValidatingInput.defaultProps = {
	type: 'default',
	withSpace: false,
};

const styles = StyleSheet.create({
	inputFields: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 20,
	},
	viewWrapper: {
		marginVertical: 20,
		width: '95%',
		flexDirection: 'row',
		alignSelf: 'center',
	},
});
// =============================================
// Export
// =============================================
export default ValidatingInput;
