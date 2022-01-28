/**
 *
 * @format
 * @flow
 *
 * Practical - Custom Label
 */
import React, {Component} from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomButton extends Component {
	render() {
		const {
			text,
			onPress,
			Color,
			ButtonHeight,
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

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	Color: PropTypes.string,
	ButtonHeight: PropTypes.number,
	ButtonMargin: PropTypes.number,
	TextColor: PropTypes.string,
	TextFont: PropTypes.number,
};
const styles = StyleSheet.create({
	button: {
		width: '88%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},

	robotoBold: {
		fontFamily: 'Roboto-Bold',
	},
});
