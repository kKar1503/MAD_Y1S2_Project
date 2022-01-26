// =============================================
// Import necessary classes for development
// =============================================
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// =============================================
// Import Screens
// =============================================
import HomeScreen from './screens/home';
import ExploreScreen from './screens/Explore/explore';
import NewListingScreen from './screens/Listings/new';
import EditProfileScreen from './screens/Profiles/edit';
import AllChatsScreen from './screens/Chats/chats';
import ChattingScreen from './screens/Chats/chatting';
import ProductScreen from './screens/Listings/product';
import LoginScreen from './screens/login';
import ReviewScreen from './screens/Reviews/Review';
import allReviewsScreen from './screens/Reviews/allReviews';
import TestScreen from './screens/TestScreen';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Button,
} from 'react-native';

// =============================================
// Create Native Stack Navigator
// =============================================
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// =============================================
// Export App with Native Stack Navigator
// =============================================

const chatNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Chats"
				component={AllChatsScreen}
				//options={{headerShown: false}}
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
							<Text
								style={{
									color: 'white',
									justifyContent: 'center',
									alignSelf: 'center',
									fontSize: 20,
									padding: 8,
								}}>
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
							<Text
								style={{
									color: 'white',
									justifyContent: 'center',
									alignSelf: 'center',
									fontSize: 20,
									padding: 8,
								}}>
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
const Draw = () => {
	return (
		<Drawer.Navigator initialRouteName="explore">
			<Drawer.Screen
				name="Explore"
				component={productNav}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Explore',
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="Chats"
				component={chatNav}
				options={{
					headerShown: false,
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
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={EditProfileScreen}
				options={{
					headerTintColor: 'white',
					headerStyle: {backgroundColor: '#424242'},
					headerTitleAlign: 'center',
					title: 'Settings',
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

//----------------------------------------------------------------------- Previous
const Ap = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerStyle: {backgroundColor: '#424242'},
						headerTintColor: 'white',
						headerTitleAlign: 'center',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => alert('This is a button!')}>
								<Image
									source={require('./assets/img/nav.png')}
								/>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="Explore"
					component={ExploreScreen}
					options={({navigation}) => ({
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'Hand It Down',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate('Home')}>
								<Image
									source={require('./assets/img/nav.png')}
								/>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="NewListing"
					component={NewListingScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'New Listing',
					}}
				/>
				<Stack.Screen
					name="EditProfile"
					component={EditProfileScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'Edit Profile',
					}}
				/>
				<Stack.Screen
					name="Chats"
					component={AllChatsScreen}
					options={({navigation}) => ({
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate('Home')}>
								<Image
									source={require('./assets/img/nav.png')}
								/>
							</TouchableOpacity>
						),
					})}
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
								<Text
									style={{
										color: 'white',
										justifyContent: 'center',
										alignSelf: 'center',
										fontSize: 20,
										padding: 8,
									}}>
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
					name="Product"
					component={ProductScreen}
					options={({navigation}) => ({
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate('Home')}>
								<Image
									source={require('./assets/img/nav.png')}
								/>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Review"
					component={ReviewScreen}
					options={{
						headerShown: false,
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'Review',
					}}
				/>
				<Stack.Screen
					name="allReviews"
					component={allReviewsScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'allReviews',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
