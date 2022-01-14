// =============================================
// Import necessary classes for development
// =============================================
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================
const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Button
				title="New Listing"
				onPress={() => navigation.navigate('NewListing')}
			/>
			<Button
				title="Edit Profile"
				onPress={() => navigation.navigate('EditProfile')}
			/>
			<Button
				title="Explore"
				onPress={() => navigation.navigate('Explore')}
			/>
			<Button
				title="Chats"
				onPress={() => navigation.navigate('Chats')}
			/>
			<Button
				title="Chatting"
				onPress={() => navigation.navigate('Chatting')}
			/>
			<Button
				title="Product"
				onPress={() => navigation.navigate('Product')}
			/>
			<Button
				title="Login"
				onPress={() => navigation.navigate('Login')}
			/>
			<Button
				title="Review"
				onPress={() => navigation.navigate('Review')}
			/>
			<Button
				title="allReviews"
				onPress={() => navigation.navigate('allReviews')}
			/>
		</View>
	);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},
});

export default Home;
