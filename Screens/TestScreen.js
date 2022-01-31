import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {insertNewUser, queryUser, queryUserById} from '../database/Schemas';
import PopupDialogComponent from './CustomComponent/PopupPromptDialog';
import PopupMessageComponent from './CustomComponent/PopupMessageDialog';
import ValidatingInput from './CustomComponent/ValidationInput';

const TestScreen = ({navigation}) => {
	const [value, setValue] = useState('');

	return (
		<View>
			<Button
				title="hello"
				onPress={() => {
					queryUserById(4)
						.then(user => setValue(user.username))
						.catch(err => console.log(err));
				}}
			/>
			<Text>{value}</Text>
		</View>
	);
};

export default TestScreen;
