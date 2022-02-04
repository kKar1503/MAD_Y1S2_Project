/* eslint-disable react-native/no-inline-styles */

// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import necessary classes for development
// =============================================
import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	SafeAreaView,
} from 'react-native';
import {LoadUserData} from '../../database/Account';
import {queryAllReviewsOfUser, reviewRealm} from '../../database/Schemas';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
// =============================================
// Main Page Implementation
// =============================================
const Item = ({title, source, comment, navigation, lightMode}) => (
	<View
		style={[
			styles.reviewContainer,
			{backgroundColor: lightMode ? 'grey' : 'black'},
		]}>
		<Image source={source} style={styles.styleImage} />
		<View style={styles.textContainer}>
			<Text
				style={[styles.title, {color: lightMode ? 'black' : 'white'}]}>
				{title}
			</Text>
			<Text
				style={[
					styles.comment,
					{color: lightMode ? 'black' : 'white'},
				]}>
				{comment}
			</Text>
		</View>
	</View>
);
const AllReviews = ({navigation}) => {
	const [reviews, setReviews] = useState([]);

	const reloadData = async () => {
		const user = await LoadUserData();
		queryAllReviewsOfUser(user.fullname)
			.then(queryReviews => {
				const restructuredReviews = [];
				for (let review of queryReviews) {
					restructuredReviews.push({
						id: review.id,
						title: review.reviewee,
						source: require('../../assets/img/Chat2.png'),
						comment: `${review.stars} stars`,
					});
				}
				setReviews(restructuredReviews);
			})
			.catch(err => {
				console.log(err);
				setReviews([]);
			});
	};

	const STORAGE_MODE = '@current_mode';
	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();
	const [lightMode, setLightMode] = useState(false);

	useEffect(() => {
		reloadData();
		reviewRealm.addListener('change', () => reloadData());
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
			source={item.source}
			comment={item.comment}
			navigation={navigation}
			lightMode={lightMode}
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
				data={reviews}
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
		alignContent: 'flex-start',
		backgroundColor: '#303030',
		paddingHorizontal: 5,
	},
	reviewContainer: {
		backgroundColor: 'black',
		padding: 15,
		flexDirection: 'row',
		margin: 3,
		borderRadius: 3,
	},
	styleImage: {
		width: 55,
		height: 55,
	},
	title: {
		color: 'white',
		fontSize: 20,
		marginBottom: 5,
	},
	comment: {
		color: 'white',
	},
	textContainer: {
		marginHorizontal: 10,
	},
});

// =============================================
// Export
// =============================================
export default AllReviews;
