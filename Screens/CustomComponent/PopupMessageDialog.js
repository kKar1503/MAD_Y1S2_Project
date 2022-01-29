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
import {StyleSheet, Text} from 'react-native';
import PopupDialog, {
	SlideAnimation,
	DialogTitle,
	DialogFooter,
	DialogContent,
	DialogButton,
} from 'react-native-popup-dialog';
import PropTypes from 'prop-types';

// =============================================
// Implements Popup Prompt Component
// =============================================
export default class PopupMessageComponent extends Component {
	state = {
		visibility: false,
	};
	showDialog() {
		this.setState({visibility: true});
	}

	render() {
		const {header, text, dismissText} = this.props;
		const {visibility} = this.state;

		return (
			<PopupDialog
				onTouchOutside={() => this.setState({visibility: false})}
				dialogTitle={
					<DialogTitle
						style={styles.header}
						title={header}
						textStyle={styles.headerText}
					/>
				}
				width={0.7}
				visible={visibility}
				dialogAnimation={
					new SlideAnimation({
						slideFrom: 'bottom',
					})
				}
				footer={
					<DialogFooter style={styles.footer}>
						<DialogButton
							onPress={() => this.setState({visibility: false})}
							text={dismissText}
							textStyle={styles.footerText}
						/>
					</DialogFooter>
				}>
				<DialogContent style={styles.container}>
					<Text style={styles.text}>{text}</Text>
				</DialogContent>
			</PopupDialog>
		);
	}
}

// =============================================
// Custom Props with PropTypes
// =============================================
PopupMessageComponent.propTypes = {
	header: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	dismissText: PropTypes.string,
};

// =============================================
// Custom Props with PropTypes
// =============================================
PopupMessageComponent.defaultProps = {
	dismissText: 'Dismiss',
};

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#424242',
	},
	header: {
		backgroundColor: '#303030',
		height: 60,
	},
	headerText: {
		fontFamily: 'Roboto-Bold',
		color: 'white',
	},
	text: {
		marginTop: 15,
		color: 'white',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#424242',
	},
	footerText: {
		color: 'white',
		fontFamily: 'Roboto-Regular',
		fontSize: 20,
	},
});
