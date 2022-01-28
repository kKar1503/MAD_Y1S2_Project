import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {insertNewUser, queryUser} from '../database/Schemas';
import PopupDialogComponent from './CustomComponent/PopupPromptDialog';
import PopupMessageComponent from './CustomComponent/PopupMessageDialog';

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

	const displayDialog = () => {
		this.messageDialog.showDialog();
	};
	return (
		<View>
			<Text>{username}</Text>
			<Text>{password}</Text>
			<Button
				title="hello"
				onPress={() => {
					// setShowDialog(true);
					// alert('done');
					displayDialog();
				}}
			/>
			<PopupMessageComponent
				header="This is a very long title"
				text="Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world"
				visible={showDialog}
				ref={c => (this.messageDialog = c)}
			/>
		</View>
	);
};

export default TestScreen;
