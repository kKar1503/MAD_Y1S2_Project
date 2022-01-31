/* eslint-disable react-native/no-inline-styles */

// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import React from 'react';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CustomSwitch from './CustomSwitch';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import realm, {queryUser} from '../../database/Schemas';
// =============================================
// Drawer Component
// =============================================
const CustomDrawer = props => {
	const STORAGE_USERNAME_KEY = '@save-username';
	const [night, setNight] = useState(true);
	const [username, setUsername] = useState('');
	const onSelectSwitch = index => {
		alert('Selected index: ' + index);
	};
	const loadData = async () => {
		try {
			const savedName = await AsyncStorage.getItem(STORAGE_USERNAME_KEY);
			setUsername(savedName);
		} catch (e) {
			alert('Could not load data');
		}
	};
	useEffect(() => {
		loadData();
		console.log('User:' + queryUser(username));
		console.log(queryUser(username)._W);
	}, []);
	return (
		<View style={{flex: 1}}>
			<DrawerContentScrollView {...props}>
				<View style={styles.border}>
					<TouchableOpacity
						style={styles.profile}
						onPress={() => props.navigation.navigate('Profile')}>
						<Image
							source={require('../../assets/img/Chat1.png')}
							style={styles.styleImage}
						/>
						<Text style={[styles.name, {fontSize: 25}]}>
							Jonathan Ooi
						</Text>
						<Text style={[styles.name, {fontSize: 15}]}>
							@{username}
						</Text>
					</TouchableOpacity>
				</View>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<View style={{padding: 20, alignSelf: 'flex-end'}}>
				<CustomSwitch
					selectionMode={2}
					roundCorner={true}
					option1={'Dark'}
					option2={'Light'}
					onSelectSwitch={onSelectSwitch}
					selectionColor={'#545454'}
				/>
			</View>
		</View>
	);
};

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	styleImage: {
		width: 80,
		height: 80,
		margin: 5,
		alignSelf: 'flex-start',
	},
	name: {
		color: 'white',
		padding: 5,
	},
	profile: {
		margin: 30,
		marginLeft: 6,
		paddingBottom: 7,
	},
	border: {
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		width: '80%',
		alignSelf: 'center',
		alignContent: 'flex-start',
	},
	logout: {
		color: 'white',
		fontSize: 18,
		fontWeight: '400',
		paddingLeft: 30,
	},
});

// =============================================
// Export
// =============================================
export default CustomDrawer;
