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
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD:screens/Listings/ListingPage.js
import CustomButton from '../CustomComponent/CustomButton';
=======
import CustomButton from '../CustomComponent/customButton';
>>>>>>> 66e15dd565cf404bc9f317266ccc0d05d3c27ff1:screens/Listings/product.js

// =============================================
// Main Page Implementation
// =============================================
const Product = ({navigation}) => {
	return (
		<View style={styles.container}>
			<ScrollView style={{paddingTop: 40}}>
				<Image
					source={require('../../assets/img/Product1.png')}
					style={styles.productpic}
				/>

				<Text style={styles.title}>Set of Six Brushes</Text>

				<Text style={styles.user}>@jonathanooi</Text>

				<Text style={styles.collection}>Self-Collect or Mailing</Text>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text style={styles.category}>Category:</Text>
					<Text style={styles.cname}>Art Supplies</Text>
				</View>

				<View style={{flexDirection: 'row', paddingTop: 10}}>
					<Text style={styles.condition}>Condition:</Text>
					<Text style={styles.condition}>Brand New</Text>
				</View>

				<View style={{paddingLeft: 20, paddingTop: 10}}>
					<Text style={styles.content}>
						Very popular Winsor & Newton brushes.{' '}
					</Text>
					<Text style={styles.content}>
						Brushes come in a set of 6.{' '}
					</Text>
					<Text style={styles.content}>
						All are of different sizes and brush tips.
					</Text>
					<Text style={styles.content}>
						Have been used for O-Level Art and is no longer in use,
						therefore to pass down to a junior who can make better
						use of them!
					</Text>
				</View>

				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity style={styles.orangebutton}>
						<Text
							style={{
								color: 'white',
								fontWeight: '500',
								fontSize: 25,
							}}>
							Reserve
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Chatting')}
						style={styles.whitebutton}>
						<Text
							style={{
								color: 'black',
								fontWeight: '500',
								fontSize: 25,
							}}>
							contact
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
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
		backgroundColor: '#303030',
	},
	content: {
		fontSize: 15,
		color: '#999999',
		lineHeight: 25,
	},
	productpic: {
		alignSelf: 'center',
		width: 350,
		height: 200,
		paddingTop: 100,
		borderRadius: 3,
		shadowOpacity: 10,
	},

	title: {paddingLeft: 20, paddingTop: 10, fontSize: 25, color: 'white'},

	user: {paddingLeft: 20, paddingTop: 10, color: '#FF8A65'},

	collection: {paddingTop: 10, paddingLeft: 20, color: 'white', fontSize: 20},

	category: {
		paddingLeft: 20,
		paddingTop: 10,
		color: 'white',
		fontSize: 20,
	},

	cname: {paddingLeft: 20, paddingTop: 10, color: '#FF8A65', fontSize: 20},

	condition: {paddingLeft: 20, paddingTop: 10, color: 'white', fontSize: 20},

	orangebutton: {
		width: 190,
		height: 45,
		backgroundColor: '#FF8A65',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		shadowRadius: 30,
		shadowOpacity: 20,
		borderRadius: 5,
	},

	whitebutton: {
		width: 120,
		height: 45,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		borderRadius: 5,
	},
});

// =============================================
// Export
// =============================================
export default Product;
