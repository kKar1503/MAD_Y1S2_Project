// =============================================
// Import necessary classes for development
// =============================================
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from 'react-native';

// =============================================
// Create Native Stack Navigator
// =============================================
const Stack = createNativeStackNavigator();

// =============================================
// Export App with Native Stack Navigator
// =============================================
const App = () => {
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
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
						title: 'Hand It Down',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => alert('This is a button!')}>
								<Image
									source={require('./assets/img/nav.png')}
								/>
							</TouchableOpacity>
						),
						headerBackVisible: true,
					}}
				/>
				<Stack.Screen
					name="NewListing"
					component={NewListingScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="EditProfile"
					component={EditProfileScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Chats"
					component={AllChatsScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
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
				<Stack.Screen
					name="Product"
					component={ProductScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						headerTintColor: 'white',
						headerStyle: {backgroundColor: '#424242'},
						headerTitleAlign: 'center',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
