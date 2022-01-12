// =============================================
// Import necessary classes for development
// =============================================
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================
const Chats = ({navigation}) => {
	return <View style={styles.container}></View>;
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});

export default Chats;
