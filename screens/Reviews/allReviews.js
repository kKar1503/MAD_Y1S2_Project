// =============================================
// Import necessary classes for development
// =============================================
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================

const DATA = [
	{
		id: '1',
		title: 'Alyssa Sng',
		username: ' alyssazxcslapdieyou',
		source: require('../../assets/img/Chat2.png'),
		comment: 'No comments written',
	},
	{
		id: '2',
		title: 'Sum Ting Wong',
		username: 'somethingwrong',
		source: require('../../assets/img/Chat2.png'),
		comment: 'No comments written',
	},
];
const Item = ({title, source, comment, navigation}) => (
	<View style={styles.reviewContainer}>
		<Image source={source} style={styles.styleImage} />
		<View style={styles.textContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.comment}>{comment}</Text>
		</View>
	</View>
);
const allReviews = ({navigation}) => {
	const renderItem = ({item}) => (
		<Item
			title={item.title}
			source={item.source}
			comment={item.comment}
			navigation={navigation}
		/>
	);

	return (
		<ScrollView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				style={{paddingTop: 10}}
			/>
		</ScrollView>
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

export default allReviews;
