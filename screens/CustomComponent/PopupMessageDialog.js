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
// Implements Popup Dialog Component
// =============================================
export default class PopupDialogComponent extends Component {
	render() {
		const {
			header,
			text,
			onPressConfirm,
			confirmButtonText,
			onPressCancel,
			cancelButtonText,
			visible,
		} = this.props;
		return (
			<PopupDialog
				onTouchOutside={() => onPressCancel()}
				dialogTitle={
					<DialogTitle
						style={styles.header}
						title={header}
						textStyle={styles.headerText}
					/>
				}
				width={0.7}
				visible={visible}
				dialogAnimation={
					new SlideAnimation({
						slideFrom: 'bottom',
					})
				}
				footer={
					<DialogFooter style={styles.footer}>
						<DialogButton
							onPress={() => onPressConfirm()}
							text={confirmButtonText}
							textStyle={styles.text}
						/>
						<DialogButton
							onPress={() => onPressCancel()}
							text={cancelButtonText}
							textStyle={styles.text}
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
PopupDialogComponent.propTypes = {
	header: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onPressConfirm: PropTypes.func.isRequired,
	confirmButtonText: PropTypes.string,
	onPressCancel: PropTypes.func.isRequired,
	cancelButtonText: PropTypes.string,
	visible: PropTypes.bool.isRequired,
};

// =============================================
// Custom Props with PropTypes
// =============================================
PopupDialogComponent.defaultProps = {
	confirmButtonText: 'Confirm',
	cancelButtonText: 'Cancel',
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
		height: 50,
	},
	headerText: {
		fontFamily: 'Roboto-Bold',
		color: 'white',
	},
	text: {
		marginTop: 10,
		color: 'white',
		fontFamily: 'Roboto-Regular',
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#424242',
	},
});
