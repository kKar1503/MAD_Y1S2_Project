// =============================================
// Import necessary classes for development
// =============================================
import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
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
	},
	{
		id: '2',
		title: 'Sum Ting Wong',
		username: 'somethingwrong',
		source: require('../../assets/img/Chat1.png'),
	},
];

const Item = ({title, username, source, navigation}) => (
	<TouchableOpacity
		style={styles.button}
		onPress={() => navigation.navigate('Chatting')}>
		<Image source={source} style={styles.styleimage} />
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.username}>@{username}</Text>
		</View>
	</TouchableOpacity>
);
const Chats = ({navigation}) => {
	const renderItem = ({item}) => (
		<Item
			title={item.title}
			username={item.username}
			source={item.source}
			navigation={navigation}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
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

		backgroundColor: '#303030',
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

export default Chats;
