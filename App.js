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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// =============================================
// Import Screens
// =============================================
import ExploreScreen from './screens/Explore/Explore';
import NewListingScreen from './screens/Listings/NewListing';
import EditProfileScreen from './screens/Profiles/EditProfile';
import ProfileScreen from './screens/Profiles/Profile';
import AllChatsScreen from './screens/Chats/Chats';
import ChattingScreen from './screens/Chats/Chatting';
import ProductScreen from './screens/Listings/ListingPage';
import LoginScreen from './screens/Login';
import ReviewScreen from './screens/Reviews/AddReview';
import allReviewsScreen from './screens/Reviews/Reviews';
import TestScreen from './screens/TestScreen';
import CustomDrawer from './screens/CustomComponent/CustomDrawer';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// =============================================
// Initialize Native Stack & Drawer Navigator
// =============================================
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// =============================================
// Chat Stack Navigator
// =============================================
const chatNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Chats"
				component={AllChatsScreen}
				options={{
					headerStyle: {backgroundColor: '#424242'},
					headerTintColor: 'white',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name="Chatting"
				component={ChattingScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					headerTitle: () => (
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.chattingHeader}>
								Alyssa Sng
							</Text>
							<Image
								source={require('./assets/img/Chat2.png')}
								style={{width: 40, height: 40}}
							/>
						</View>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

// =============================================
// Product Stack Navigator
// =============================================
const productNav = () => {
	return (
		<Stack.Navigator initialRouteName="Explore">
			<Stack.Screen
				name="Product"
				component={ProductScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Explore',
				}}
			/>
			<Stack.Screen
				name="Chatting"
				component={ChattingScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					headerTitle: () => (
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.chattingHeader}>
								Alyssa Sng
							</Text>
							<Image
								source={require('./assets/img/Chat2.png')}
								style={{width: 40, height: 40}}
							/>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="Explore"
				component={ExploreScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Explore',
				}}
			/>
		</Stack.Navigator>
	);
};

// =============================================
// Profile Stack Navigator
// =============================================
const profileNav = ({navigation}) => {
	return (
		<Stack.Navigator initialRouteName="Profile">
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerTintColor: 'white',
					headerTitleAlign: 'center',
					title: 'My Profile',
					drawerActiveTintColor: 'white',
					headerTransparent: true,
					headerShadowVisible: false,
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('Settings')}>
							<Image
								style={{width: 20, height: 20}}
								source={require('./assets/img/dots.png')}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="Settings"
				component={EditProfileScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Settings',
					drawerLabelStyle: styles.drawer,
					drawerActiveTintColor: 'white',
				}}
			/>
		</Stack.Navigator>
	);
};

// =============================================
// Drawer Navigator
// =============================================
const Draw = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Explore"
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#ff8657',
					width: '73%',
				},
			}}
			drawerContent={props => <CustomDrawer {...props} />}>
			<Drawer.Screen
				name="Explore"
				component={productNav}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Explore',
					headerShown: false,
					drawerLabelStyle: styles.drawer,
					drawerActiveTintColor: 'white',
				}}
			/>
			<Drawer.Screen
				name="Chats"
				component={chatNav}
				options={{
					headerShown: false,
					drawerLabelStyle: styles.drawer,
					drawerActiveTintColor: 'white',
				}}
			/>
			<Drawer.Screen
				name="Post New Listing"
				component={NewListingScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'New Listing',
					drawerLabelStyle: styles.drawer,
					drawerActiveTintColor: 'white',
				}}
			/>
			<Drawer.Screen
				name="My Reviews"
				component={allReviewsScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'My Reviews',
					drawerLabelStyle: styles.drawer,
					drawerActiveTintColor: 'white',
				}}
			/>
			<Drawer.Screen
				name="Profile"
				component={profileNav}
				options={{
					headerShown: false,
					drawerLabelStyle: styles.drawer,
				}}
			/>

			<Drawer.Screen
				name="Test"
				component={TestScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Test',
				}}
			/>
		</Drawer.Navigator>
	);
};

// =============================================
// App Configuration for Navigation Container
// =============================================
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Explore"
					component={Draw}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// =============================================
// Stylesheet
// =============================================
const styles = StyleSheet.create({
	drawer: {
		color: 'white',
		fontSize: 18,
		fontWeight: '400',
		paddingLeft: 15,
	},
	chattingHeader: {
		color: 'white',
		justifyContent: 'center',
		alignSelf: 'center',
		fontSize: 20,
		padding: 8,
	},
});

// =============================================
// Export
// =============================================
export default App;
