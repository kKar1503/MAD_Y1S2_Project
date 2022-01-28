/**
 *
 * @format
 * @flow
 *
 * Practical - Custom Label
 */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

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

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};
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
