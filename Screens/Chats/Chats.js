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
import React, {useState, useEffect} from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
// =============================================
// Data Declaration for Gifted Chat
// =============================================
const STORAGE_MODE = '@current_mode';
const DATA = [
	{
		id: '1',
		title: 'Alyssa Sng',
		username: ' alyssazxcslapdieyou',
		source: require('../../assets/img/Chat2.png'),
	},
];

const Item = ({title, username, source, navigation}) => (
	<TouchableOpacity
		style={styles.button}
		onPress={() => navigation.navigate('ChattingStack')}>
		<Image source={source} style={styles.styleimage} />
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.username}>@{username}</Text>
		</View>
	</TouchableOpacity>
);

// =============================================
// Chat Screen Implementation
// =============================================
const Chats = ({navigation}) => {
	const [lightMode, setLightMode] = useState(false);

	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();

	useEffect(() => {
		AsyncStorage.getItem(STORAGE_MODE, (err, res) => {
			if (!err) {
				if (parseInt(res, 10) === 2) {
					console.log('light');
					setLightMode(true);
				} else {
					console.log('dark');
					setLightMode(false);
				}
			} else {
				console.log(err);
			}
		});
	}, [isFocused, drawerStatus]);

	const renderItem = ({item}) => (
		<Item
			title={item.title}
			username={item.username}
			source={item.source}
			navigation={navigation}
		/>
	);

	return (
		<SafeAreaView
			style={[
				styles.container,
				{backgroundColor: lightMode ? 'white' : '#303030'},
			]}>
			<FlatList
				nestedScrollEnabled={true}
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				style={{paddingTop: 10}}
			/>
		</SafeAreaView>
	);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		flexDirection: 'row',
		width: '97%',
		marginVertical: 5,
		marginHorizontal: 6,
		backgroundColor: '#434343',
		alignItems: 'center',
		borderRadius: 5,
	},

	title: {
		fontSize: 23,
		color: 'white',
		padding: 3,
	},
	username: {
		fontSize: 15,
		color: 'white',
	},
	styleimage: {
		width: 60,
		height: 60,
		margin: 20,
	},
});

// =============================================
// Export
// =============================================
export default Chats;
