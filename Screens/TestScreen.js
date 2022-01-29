import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {insertNewUser, queryUser} from '../database/Schemas';
import PopupDialogComponent from './CustomComponent/PopupPromptDialog';
import PopupMessageComponent from './CustomComponent/PopupMessageDialog';
import ValidatingInput from './CustomComponent/ValidationInput';

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
	const [value, setValue] = useState('');

	return (
		<View>
			<ValidatingInput
				type="password"
				value={value}
				onChangeText={text => {
					setValue(text);
				}}
				placeholder="Test"
				locale="en-SG"
				required={true}
			/>
		</View>
	);
};

export default TestScreen;
