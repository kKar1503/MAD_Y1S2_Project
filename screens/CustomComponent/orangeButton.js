/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * Practical - Custom Label
 */
import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class OrangeButton extends Component {
	render(text) {
		const text = this.props.text;
		return (
			<TouchableOpacity style={styles.button}>
				<Text style={[styles.buttonWord, styles.robotoBold]}>
					{this.PropTypes.text}
				</Text>
			</TouchableOpacity>
		);
	}
}

OrangeButton.PropTypes = {
	text: PropTypes.string,
};
const styles = StyleSheet.create({
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
	robotoBold: {
		fontFamily: 'Roboto-Bold',
	},
});
