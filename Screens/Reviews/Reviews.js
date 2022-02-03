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

// =============================================
// Main Page Implementation
// =============================================
const Item = ({title, source, comment, navigation}) => (
	<View style={styles.reviewContainer}>
		<Image source={source} style={styles.styleImage} />
		<View style={styles.textContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.comment}>{comment}</Text>
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

	const isFocused = useIsFocused();

	useEffect(() => {
		reloadData();
		reviewRealm.addListener('change', () => reloadData());
	}, [isFocused]);

	const renderItem = ({item}) => (
		<Item
			title={item.title}
			source={item.source}
			comment={item.comment}
			navigation={navigation}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
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
