import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PopupDialog from 'react-native-popup-dialog/dist/PopupDialog';
import {UserState} from 'realm';
import {insertNewUser, queryUser} from '../database/Schemas';
import PopupDialogComponent from './CustomComponent/PopupMessageDialog';

const newUser = {
	id: 2,
	username: 'kkar',
	password: 'kar123',
	fullname: 'karlok',
	email: 'kar@kar',
	birthday: new Date(),
	phone: 1234,
};

const TestScreen = ({navigation}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showDialog, setShowDialog] = useState(false);
	return (
		<View>
			<Text>{username}</Text>
			<Text>{password}</Text>
			<Button
				title="hello"
				onPress={() => {
					setShowDialog(true);
					alert('done');
				}}
			/>
			<PopupDialogComponent
				header="This is a very long title"
				text="Hello world"
				confirmButtonText="Confirm"
				onPressConfirm={() => alert('Hello world')}
				onPressCancel={() => {
					setShowDialog(false);
					console.log('cancelled');
				}}
				cancelButtonText="Cancel"
				visible={showDialog}
			/>
		</View>
	);
};

export default TestScreen;
