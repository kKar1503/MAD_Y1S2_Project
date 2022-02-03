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
import ExploreScreen from './Screens/Explore/Explore';
import NewListingScreen from './Screens/Listings/NewListing';
import EditProfileScreen from './Screens/Profiles/EditProfile';
import ProfileScreen from './Screens/Profiles/Profile';
import AllChatsScreen from './Screens/Chats/Chats';
import ChattingScreen from './Screens/Chats/Chatting';
import ProductScreen from './Screens/Listings/ListingPage';
import LoginScreen from './Screens/Login';
import AddReviewScreen from './Screens/Reviews/AddReview';
import ReviewsScreen from './Screens/Reviews/Reviews';
import CustomDrawer from './Screens/CustomComponent/CustomDrawer';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	LogBox,
} from 'react-native';

// =============================================
// Initialize Native Stack & Drawer Navigator
// =============================================
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// =============================================
// Initialize Native Stack & Drawer Navigator
// =============================================
LogBox.ignoreLogs([
	'EventEmitter.removeListener',
	'Reanimated 2',
	'Require cycle:',
	'DialogActionList',
	'componentWillReceiveProps',
]);

// =============================================
// Chat Stack Navigator
// =============================================
const chatNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ChatsStack"
				component={AllChatsScreen}
				options={{
					headerStyle: {backgroundColor: '#424242'},
					headerTintColor: 'white',
					headerTitleAlign: 'center',
					title: 'Chats',
				}}
			/>
			<Stack.Screen
				name="ChattingStack"
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
				name="ChattingProduct"
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
					title: 'Home',
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
			<Stack.Screen
				name="My Reviews"
				component={ReviewsScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'My Reviews',
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
			initialRouteName="Login"
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#ff8657',
					width: '73%',
				},
			}}
			drawerContent={props => <CustomDrawer {...props} />}>
			<Drawer.Screen
				name="Home"
				component={productNav}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Home',
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
				component={ReviewsScreen}
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
				name="Login"
				component={LoginScreen}
				options={{
					title: 'Logout',
					headerShown: false,
					swipeEdgeWidth: 0,
					drawerLabelStyle: styles.drawer,
				}}
			/>
			<Drawer.Screen
				name="Profile"
				component={profileNav}
				options={{
					drawerItemStyle: {height: 0},
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
			<Draw />
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
